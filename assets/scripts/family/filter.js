/* ========================================================================
 *
 * filter.js
 * Arbyn Acosta (C) 2020
 *
 * Filters the GEDCOM X data using a query.
 *
 * Dependencies:
 *   - utils.js
 *
 * ===================================================================== */

/** Functions **/

/*
 * Returns the likeness of the query matching a person info.
 */
function searchPerson(query, person)
{
  'use strict';

  // Just return, there's no query anyway
  if (!query) {
    return false;
  }

  // Search actual id if query is a number
  let intQuery = parseInt(query);
  if (Number.isInteger(intQuery)) {
    return person.id == intQuery ? 1 : 0;
  }

  // Split query and name by space so we can compare per word
  let queryParts = query.split(' ');
  let nameParts = person.names[0].nameForms[0].fullText.split(' ');

  // Get overall, word-per-word likeness
  let overallLikeness = 0;
  for (let i = 0, imax = queryParts.length; i < imax; i++) {
    let queryLikeness = 0;
    for (let j = 0, jmax = nameParts.length; j < jmax; j++) {
      let nameLikeness = queryParts[i].compare(nameParts[j]);
      if (nameLikeness > queryLikeness) {
        queryLikeness = nameLikeness;
      }
    }
    overallLikeness += queryLikeness;
  }
  overallLikeness /= queryParts.length

  return overallLikeness;
}

function filterPersons(query, persons)
{
  'use strict';

  // Reset importance
  for (let i = 0, imax = persons.length; i < imax; i++) {
    delete persons[i].importance;
  }

  // Don't bother, there's no query
  if (!query) {
    return {
      persons: persons,
      annotations: getPedegreeAnnotations(persons[0].id, 0, persons, []),
      main: persons[0],
    };
  }

  // Get direct matches, the spouse of that direct match, and its parents
  let likenessMapping = {};
  let highestLikeness = 0;
  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];
    let likeness = searchPerson(query, person);

    if (likenessMapping[likeness] == undefined) {
      likenessMapping[likeness] = [person.id];
    } else {
      likenessMapping[likeness].push(person.id);
    }

    highestLikeness = Math.max(highestLikeness, likeness);
  }

  // Don't even bother if the highest likeness is less than 73%
  if (highestLikeness < 0.73) {
    return {
      persons: persons,
      annotations: getPedegreeAnnotations(persons[0].id, 0, persons, []),
      main: persons[0],
    };
  }

  // Determines if we've hit a main query using the input query
  let isMainQuery = false;
  for (let i = 0, queryParts = query.split(' '), imax = queryParts.length; i < imax; i++) {
    if (['acosta', 'argabioso', 'maramba', 'saplala'].includes(queryParts[i])) {
      isMainQuery = true;
    }
  }

  // All the match containers
  let directMatchIds = likenessMapping[highestLikeness];
  let parentMatchIds = [];
  let siblingMatchIds = [];
  let spouseMatchIds = [];
  let childrenMatchIds = [];

  // Get direct matches, the spouse of that direct match, and its parents
  for (let i = 0, imax = directMatchIds.length; i < imax; i++) {
    let id = directMatchIds[i];
    let person = persons.getby(id);

    parentMatchIds = parentMatchIds.concat(person.parents);
    siblingMatchIds = siblingMatchIds.concat(person.siblings);
    spouseMatchIds = spouseMatchIds.concat(person.spouses);
  }

  // Default to first person in direct matches, otherwise... ARBYN IS THE MAIN!!
  let singleSearch = (directMatchIds.length == 1);
  let mainPerson = null;
  let annotations = [];
  if (singleSearch) {
    mainPerson = persons.getby(directMatchIds[0]);
    annotations = getPedegreeAnnotations(mainPerson.id, 0, persons, []);
  } else if (isMainQuery) {
    mainPerson = persons[0];
  }

  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];

    // If a parent is in the direct matches, include its kids as well
    for (let j = 0, jmax = (person.parents || []).length; j < jmax; j++) {
      if (directMatchIds.includes(person.parents[j])) {
        childrenMatchIds.push(person.id);
      }
    }

    // If a spouse is in the direct matches, include its partner as well
    for (let j = 0, jmax = (person.spouses || []).length; j < jmax; j++) {
      if (directMatchIds.includes(person.spouses[j])) {
        childrenMatchIds.push(person.id);
      }
    }
  }

  // Add all parents too
  let matchIds = directMatchIds.concat(childrenMatchIds);
  matchIds = matchIds.concat(parentMatchIds);
  matchIds = matchIds.concat(siblingMatchIds);
  matchIds = matchIds.concat(spouseMatchIds);
  if (singleSearch) {
    for (let i = 0, imax = matchIds.length; i < imax; i++) {
      for (let j = 0, jmax = persons.length; j < jmax; j++) {
        let person = persons[j];

        if (matchIds[i] == person.id) {
          matchIds = matchIds.concat(person.parents);
        }
      }
    }
  }

  // Check if there are any important people in direct matches
  // let isImportantFound = false;
  // for (let i = 0, imax = directMatchIds.length; i < imax; i++) {
  //   if (persons.getby(directMatchIds[i]).importance != undefined) {
  //     isImportantFound = true;
  //   }
  // }

  // Add important nodes if an importance was seen in direct
  if (singleSearch) {
    for (let i = 0, imax = persons.length; i < imax; i++) {
      let person = persons[i];

      if (person.importance != undefined) {
        matchIds.push(person.id);
      }
    }
  }

  let filteredPersons = [];
  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];

    if (!matchIds.includes(person.id)) {
      continue;
    }

    let newParents = [];
    for (let j = 0, jmax = (person.parents || []).length; j < jmax; j++) {
      if (matchIds.includes(person.parents[j])) {
        newParents.push(person.parents[j]);
      }
    }

    let newSpouses = [];
    for (let j = 0, jmax = (person.spouses || []).length; j < jmax; j++) {
      if (matchIds.includes(person.spouses[j])) {
        newSpouses.push(person.spouses[j]);
      }
    }

    person.parents = newParents;
    person.spouses = newSpouses;
    filteredPersons.push(person);
  }

  return {
    persons: filteredPersons,
    annotations: annotations,
    main: mainPerson,
  };
}
