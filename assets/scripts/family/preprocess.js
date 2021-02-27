/* ========================================================================
 *
 * preprocess.js
 * Arbyn Acosta (C) 2020
 *
 * Preprocess the GEDCOM X data to fit our persons viewer.
 *
 * Dependencies:
 *   - utils.js
 *
 * ===================================================================== */

/** Functions **/

/*
 * Returns the basic primitive equivalent of an array.
 */
function getItemizedArray(array)
{
  'use strict';

  let result = [];
  for (let i = 0, imax = array.length; i < imax; i++) {
    array[i].idx = i;
    result.push(new primitives.famdiagram.ItemConfig(array[i]));
  }
  return result;
}

/*
 * Generates a short description
 * for the given person. For now,
 * it just uses the full name and
 * when the person is born.
 */
function generateDescription(person)
{
  'use strict';

  let fullname = getFullName(person);
  let fullBirthDate = getFullLifeRange(person);
  if (fullBirthDate) {
    return fullname + ' was born on ' + fullBirthDate + '.';
  }
  return fullname;
}

/*
 * Simply return the full name.
 */
function getFullName(person)
{
  'use strict';
  return person.names[0].nameForms[0].fullText;
}

/*
 * Simply return the full name.
 */
function getFullLifeRange(person)
{
  'use strict';
  return null;
}

/*
 * Applies a name shortener to allow display
 * on the small item area.
 */
function getDisplayName(person, lengthThreshold)
{
  'use strict';

  const givenProperty = 'Given';
  const surnameProperty = 'Surname';
  const suffixProperty = 'Suffix';
  const rawNameParts = person.names[0].nameForms[0].parts;

  function flattenNameParts(nameParts)
  {
    let result = '';

    // Only consider given name if there is a given name
    if (nameParts[givenProperty]) {
      result += nameParts[givenProperty].value.join(' ');
    }

    // Only consider surname if there is a surname
    if (nameParts[surnameProperty]) {
      result += ' ';
      result += nameParts[surnameProperty].value.join(' ');
    }

    // Only consider suffix if there is a suffix
    if (nameParts[suffixProperty]) {
      result += ' ';
      result += nameParts[suffixProperty].value.join(' ');
    }

    return result;
  }

  function reduceNamePartType(namePartType, lengthThreshold)
  {
    while (flattenNameParts(nameParts).length > lengthThreshold && nameParts[namePartType].cursor > 0) {
      let currentPart = nameParts[namePartType].value[nameParts[namePartType].cursor];
      nameParts[namePartType].value[nameParts[namePartType].cursor] = currentPart[0];
      nameParts[namePartType].cursor -= 1;
    }
  }

  // Divide name parts into mappings and also split by spaces
  // Final nameParts object is:
  // {Given: {cursor: 2, ['a', 'b', 'c']}, Surname: {cursor: 0, ['a']}}
  let nameParts = {};
  for (let i = 0, imax = rawNameParts.length; i < imax; i++) {
    let type = rawNameParts[i].type.split('/').pop();
    let value = rawNameParts[i].value.split(' ');

    nameParts[type] = {
      cursor: value.length - 1,
      value: value,
    };
  }

  // Constantly reduce the name parts until fit
  reduceNamePartType(givenProperty, lengthThreshold - 6);
  reduceNamePartType(surnameProperty, lengthThreshold);

  return flattenNameParts(nameParts);
}

/*
 * Convert the GEDCOM X Gender type into 1 or 0 gender.
 */
function getDisplayGender(person)
{
  'use strict';
  return person.gender.type.includes('Male') ? 1 : 0;
}

/*
 * Returns the life range of a person in years.
 */
function getLifeRange(person)
{
  'use strict';

  // Dont't do anything if there are no facts
  if (!person.facts || person.facts.length == 0) {
    return '';
  }

  const birthProperty = 'Birth';
  const deathProperty = 'Death';

  let birth = null;
  let death = null;
  let isDead = false;

  for (let i = 0, imax = person.facts.length; i < imax; i++) {
    let fact = person.facts[i];

    // Only allow valid year in death, otherwise put empty string
    if (fact.type.includes(deathProperty)) {
      isDead = true;

      if (fact.date && fact.date.original) {
        death = fact.date.original.split(' ').pop();
        if (!parseInt(death)) {
          death = '';
        }
      }
    }

    // Only allow valid year in birth, otherwise put empty string
    else if (fact.type.includes(birthProperty)) {
      if (fact.date && fact.date.original) {
        birth = fact.date.original.split(' ').pop();
        if (!parseInt(birth)) {
          birth = '';
        }
      }
    }
  }

  // Not dead yet, add Living status
  if (!isDead) {
    death = 'Living'
  }

  let separator = '';
  if (birth || death) {
    separator = ' — ';
  }

  return ((!birth) ? '' : birth) + separator + ((!death) ? '' : death);
}

/*
 * Add person to corresponding relationship.
 */
function addRelationship(person, relationship, gedcomProperty, personProperty)
{
  'use strict';

  if (!relationship.type.includes(gedcomProperty)) {
    return;
  }

  let personId = relationship.person1.resourceId;
  if (person[personProperty]) {
    person[personProperty].push(personId);
  }
  else {
    person[personProperty] = [personId];
  }
}

/*
 * Convert ParentChild relationship into parent array property.
 */
function addRelationships(persons, relationships)
{
  'use strict';

  // Don't do anything if there are no relationships defined
  if (!relationships || relationships.length <= 0) {
    return persons;
  }

  // const grandParentProperty = 'GrandParent';
  const parentProperty = 'ParentChild';
  const spouseProperty = 'Couple';

  for (let i = 0, imax = relationships.length; i < imax; i++) {
    let relationship = relationships[i];
    let person = persons.getby(relationship.person2.resourceId);

    // addRelationship(person, relationship, grandParentProperty, 'gparents');
    addRelationship(person, relationship, parentProperty, 'parents');
    addRelationship(person, relationship, spouseProperty, 'spouses');
  }

  // Special case for siblings
  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];
    let siblings = persons.getbys(person.parents, 'parents');

    if (siblings.length != 0) {
      person.siblings = [];
      for (let j = 0, jmax = siblings.length; j < jmax; j++) {
        let sibling = siblings[j];
        if (person.id != sibling.id) {
          person.siblings.push(sibling.id);
        }
      }
    }
  }

  return persons
}

/*
 * Add display names and display life.
 */
function addDisplayDetails(persons)
{
  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];

    person.displayname = getDisplayName(person, style.name.lengthThreshold);
    person.displaygender = getDisplayGender(person);
    person.liferange = getLifeRange(person);

    // For hover details
    person.description = generateDescription(person);
  }

  return persons;
}

/*
 * Adds an annotation entry into the given array, using the
 * different parameters given.
 *
 * @param {Array} annotations: Original annotations to append to
 * @param {Text} color: The color to use for the highlight
 * @param {Array} persons: List of ids that the highlight will be applied to
 * @param {Number} lineWidth: Highlight line width in pixels
 * @param {Number} lineType: The corresponding line type for the highlight
 */
function addHighlightPath(annotations, color, persons, lineWidth, lineType)
{
  'use strict';

  // Make lineWidth and lineType optional
  if (lineWidth === undefined || lineWidth === null) lineWidth = 20;
  if (lineType === undefined || lineType === null) lineType = 0;

  return annotations.concat([
    new primitives.famdiagram.HighlightPathAnnotationConfig(
      Object.assign(style.highlight, {
        "color": style.body.background.color,
        "items": persons,
        "lineWidth": (8 + (2 * lineWidth)) / 1.5,
      })
    ),
    new primitives.famdiagram.HighlightPathAnnotationConfig(
      Object.assign(style.highlight, {
        "color": color,
        "items": persons,
        "lineWidth": lineWidth,
        "lineType": lineType,
      })
    ),
  ]);
}

/*
 * Adds a special highlight to the connectors of the ancestors of
 * of the selected `id`.
 *
 * @param {Text} id: The id of the main person
 * @param {Number} importance: Indicator for important persons:
 *   0 is for the main person
 *   1 for its parents
 *   2 for its grand parents and so on
 * @param {Array} persons: the family tree, persons array
 * @param {Array} annotations: Original annotations to append to
 * @return {Array} The new, updated annotations
 */
function getPedegreeAnnotations(id, importance, persons, annotations)
{
  'use strict';

  // Put a default empty array if first call
  if (!annotations) {
    annotations = [];
  }

  // Default to first person if can't find by ID
  let person = persons.getby(id);
  if (!person) {
    person = persons[0].id;
  }

  // The main person has no parents, stop the method
  if (person && !person.parents) {
    person.importance = importance;
    return annotations;
  }

  annotations = addHighlightPath(
    annotations,
    style.highlight.background.colors[importance],
    [id].concat(person.parents),
    style.highlight.thickness[importance],
  );

  // Recursively get the ancestors of the main person
  person.importance = importance;
  for (let i = 0, imax = (person.parents || []).length; i < imax; i++) {
    annotations = getPedegreeAnnotations(person.parents[i], importance + 1, persons, annotations);
  }

  return annotations
}
