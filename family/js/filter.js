/* ========================================================================
 *
 * preprocess.js
 * Arbyn Acosta (C) 2020
 *
 * Preprocess
 *
 * ===================================================================== */

/** Preprocess constants **/

let QUERY = Utils.getURLParam('q');

function addHighlightPath(annotations, color, items, line_width, line_type)
{
  'use strict';

  // Make line_width and line_type optional
  if (line_width === undefined || line_width === null) line_width = 20;
  if (line_type === undefined || line_type === null) line_type = 0;

  return annotations.concat([
    new primitives.famdiagram.HighlightPathAnnotationConfig(
      Object.assign(HighlightBaseCfg, {
        "color": Color.Body.BG,
        "items": items,
        "lineWidth": (8 + (2 * line_width)) / 1.5,
      })
    ),
    new primitives.famdiagram.HighlightPathAnnotationConfig(
      Object.assign(HighlightBaseCfg, {
        "color": color,
        "items": items,
        "lineWidth": line_width,
        "lineType": line_type,
      })
    ),
  ]);
}

function addImportanceToNodeParents(id, importance, tree, annotations)
{
  'use strict';

  let item = Utils.getNode(id, tree);
  if (item === undefined || item === null) {
    return annotations;
  }

  if (item && !item.parents) {
    item.importance = importance;
    return annotations;
  }

  annotations = addHighlightPath(
    annotations,
    Color.Highlight.BGS[importance],
    [id].concat(item.parents),
    Measure.Highlight.THICKNESS[importance],
    (item.status.adopted) ? 1 : null,
  );

  item.importance = importance;
  for (let i = 0, imax = (item.parents || []).length; i < imax; i++) {
    annotations = addImportanceToNodeParents(item.parents[i], importance + 1, tree, annotations);
  }

  return annotations
}

function filterTree(query, tree)
{
  'use strict';

  let annotations = [];
  if (!query) {
    annotations = addImportanceToNodeParents(0, 0, tree, annotations);

    return {
      tree: tree,
      annotations: annotations,
    }
  }

  let mainQuery = false;
  let directNodeIds = [];
  let parentNodeIds = [];
  let siblingNodeIds = [];
  let spouseNodeIds = [];
  let childrenNodeIds = [];
  let isImportantFound = false;

  // Get direct matches, the spouse of that direct match, and its parents
  for (let i = 0, imax = tree.length; i < imax; i++) {
    let item = tree[i];

    let firstname = item.name.first ? item.name.first.toLowerCase() : '';
    let nickname = item.name.nick[0] ? item.name.nick[0].toLowerCase() : '';
    let middlename = item.name.middle ? item.name.middle.toLowerCase() : '';
    let lastname = item.name.last ? item.name.last.toLowerCase() : '';

    if (Utils.isQueryInNode(query, item)) {
      directNodeIds.push(item.id);

      parentNodeIds = parentNodeIds.concat(item.parents);
      siblingNodeIds = siblingNodeIds.concat(item.siblings);
      spouseNodeIds = spouseNodeIds.concat(item.spouses);
    }
  }

  annotations = [];
  if (directNodeIds.length == 1) {
    QUERY = directNodeIds[0];
    annotations = addImportanceToNodeParents(directNodeIds[0], 0, tree, annotations);
  } else if (mainQuery) {
    annotations = addImportanceToNodeParents(0, 0, tree, annotations);
  }

  // Get direct matches, the spouse of that direct match, and its parents
  for (let i = 0, imax = tree.length; i < imax; i++) {
    let item = tree[i];

    if (item.importance) {
      isImportantFound = true;
    }
  }

  let singleSearch = false;
  let mainNode = null;
  if (directNodeIds.length == 1) {
    mainNode = Utils.getNode(directNodeIds[0], tree);
    singleSearch = true;
    isImportantFound = true;
  } else if (mainQuery) {
    mainNode = Utils.getNode(0, tree);
    isImportantFound = true;
  }

  // If a parent is in the direct matches, include its kids as well
  for (let i = 0, imax = tree.length; i < imax; i++) {
    let item = tree[i];

    for (let j = 0, jmax = (item.parents || []).length; j < jmax; j++) {
      if (directNodeIds.includes(item.parents[j])) {
        childrenNodeIds.push(item.id);

        if (item.importance) {
          isImportantFound = true;
        }
      }
    }
  }

  // If a parent is in the direct matches, include its kids as well
  for (let i = 0, imax = tree.length; i < imax; i++) {
    let item = tree[i];

    for (let j = 0, jmax = (item.spouses || []).length; j < jmax; j++) {
      if (directNodeIds.includes(item.spouses[j])) {
        childrenNodeIds.push(item.id);

        if (item.importance) {
          isImportantFound = true;
        }
      }
    }
  }

  // Add all parents to
  let includedNodeIds = directNodeIds.concat(childrenNodeIds);
  includedNodeIds = includedNodeIds.concat(parentNodeIds);
  includedNodeIds = includedNodeIds.concat(siblingNodeIds);
  includedNodeIds = includedNodeIds.concat(spouseNodeIds);
  if (singleSearch) {
    for (let i = 0, imax = includedNodeIds.length; i < imax; i++) {
      for (let j = 0, jmax = tree.length; j < jmax; j++) {
        let item = tree[j];

        if (includedNodeIds[i] == item.id) {
          includedNodeIds = includedNodeIds.concat(item.parents);
        }
      }
    }
  }

  // Add important nodes if an importance was seen in direct
  if (isImportantFound) {
    for (let i = 0, imax = tree.length; i < imax; i++) {
      let item = tree[i];

      if (item.importance || item.importance == 0) {
        includedNodeIds.push(item.id);
      }
    }
  }

  let newTree = [];
  for (let i = 0, imax = tree.length; i < imax; i++) {
    let item = tree[i];

    if (includedNodeIds.includes(item.id)) {
      let newParents = [];
      for (let j = 0, jmax = (item.parents || []).length; j < jmax; j++) {
        if (includedNodeIds.includes(item.parents[j])) {
          newParents.push(item.parents[j]);
        }
      }

      let newSpouses = [];
      for (let j = 0, jmax = (item.spouses || []).length; j < jmax; j++) {
        if (includedNodeIds.includes(item.spouses[j])) {
          newSpouses.push(item.spouses[j]);
        }
      }

      item.parents = newParents;
      item.spouses = newSpouses;
      newTree.push(item);
    }
  }

  annotations = [];
  if (directNodeIds.length == 1) {
    annotations = addImportanceToNodeParents(directNodeIds[0], 0, newTree, annotations);
  } else {
    annotations = addImportanceToNodeParents(0, 0, newTree, annotations);
  }

  return {
    tree: newTree,
    annotations: annotations,
  }
}

function preprocessNames(tree)
{
  'use strict';

  let newTree = [];
  for (let i = 0, imax = tree.length; i < imax; i++) {
    let item = tree[i];
    let nameParts = [];

    // Add period if the middle name given is just a letter
    let middleName = '';
    if (item.name.middle) {
      let middleNameParts = item.name.middle.split(' ');

      // Consider multi-word middle names
      if (middleNameParts.length != 1 && item.name.middle.length != 1) {
        middleName += middleNameParts[0];
        for (let j = 0, jmax = middleNameParts.length - 1; j < jmax; j++) {
          middleName += ' ' + middleNameParts[j + 1][0].toUpperCase();
        }
      } else {
        middleName += middleNameParts[0][0];
      }
    }

    if (item.name.last == null || item.name.first == null) {
      middleName = item.name.middle;
    }

    // Combine everything else with just space
    let fullfullParts = []
    if (item.name.first) { fullfullParts.push(item.name.first); }
    if (item.name.middle) { fullfullParts.push((item.name.middle.length == 1) ? item.name.middle + '.' : item.name.middle); }
    if (item.name.last) { fullfullParts.push(item.name.last); }
    if (item.name.suffix.family) { fullfullParts.push(item.name.suffix.family); }
    item.fullfullname = fullfullParts.join(' ');

    // Combine everything else with just space
    if (item.name.first) { nameParts.push(item.name.first); }
    if (middleName) { nameParts.push(middleName); }
    if (item.name.last) { nameParts.push(item.name.last); }
    if (item.name.suffix.family) { nameParts.push(item.name.suffix.family); }

    // Get birth year and is alive status
    let birthYear = item.birth.year ? item.birth.year : '';
    let lifeSep = '';
    if (!item.birth.year && item.status.dead) {
      if (item.death.year) {
        lifeSep = ' — ';
      }
    } else {
      lifeSep = ' — ';
    }
    let isLiving = ''
    if (item.status.dead) {
      if (item.death.year) {
        isLiving = item.death.year;
      } else {
        isLiving = '';
      }
    } else {
      isLiving = 'Living';
    }
    let life = birthYear + lifeSep + isLiving;

    // Check if the fullname length reaches the limit
    let firstName = '';
    if (nameParts.join(' ').length >= Measure.Name.MAX_LENGTH) {
      firstName = '';
      let firstNameParts = item.name.first.split(' ');

      // Consider multi-word first names
      firstName += firstNameParts[0];
      for (let j = 0, jmax = firstNameParts.length - 1; j < jmax; j++) {
        firstName += ' ' + firstNameParts[j + 1][0].toUpperCase();
      }

      nameParts = [firstName]
      if (middleName) { nameParts.push(middleName); }
      if (item.name.last) { nameParts.push(item.name.last); }
      if (item.name.suffix.family) { nameParts.push(item.name.suffix.family); }
    }

    // Check if the fullname length reaches the limit
    if (nameParts.join(' ').length >= Measure.Name.MAX_LENGTH) {
      middleName = '';
      if (item.name.middle) {
        let middleNameParts = item.name.middle.split(' ');

        // Consider multi-word first names
        for (let j = 0, jmax = middleNameParts.length; j < jmax; j++) {
          middleName += ' ' + middleNameParts[j][0].toUpperCase();
        }
      }

      nameParts = []
      if (firstName) { nameParts.push(firstName); }
      nameParts.push(middleName);
      if (item.name.last) { nameParts.push(item.name.last); }
      if (item.name.suffix.family) { nameParts.push(item.name.suffix.family); }
    }

    // Check if the displayed name is too short
    if (nameParts.join(' ').length <= (Measure.Name.MAX_LENGTH / 2) && nameParts.length <= 2) {
      let last = '';

      nameParts = []
      if (item.name.first) { nameParts.push(item.name.first); }
      if (item.name.middle) { nameParts.push(item.name.middle); }
      if (item.name.last) { nameParts.push(item.name.last); }
      if (item.name.suffix.family) { nameParts.push(item.name.suffix.family); }
    }

    item.fullname = nameParts.join(' ').replace('  ', ' ');
    item.life = life;
    newTree.push(item);
  }

  return newTree;
}

function treefy(tree)
{
  'use strict';

  let newTree = [];
  for (let i = 0, imax = tree.length; i < imax; i++) {
    newTree.push(new primitives.famdiagram.ItemConfig(tree[i]));
  }
  return newTree;
}


result = treefy(RAW_DATA);
result = filterTree(QUERY, result);

let mainTree = result.tree;
let ANNOTATIONS = result.annotations;
let MAIN_TREE = preprocessNames(mainTree);
// let MAIN_TREE = mainTree;
