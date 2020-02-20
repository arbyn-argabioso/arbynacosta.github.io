const LOC = window.location.pathname;
const IS_DEV = LOC.includes('.html');
const CURRENT_URL = LOC.substring(0, LOC.lastIndexOf('/')) + (IS_DEV ? '/index.html' : '');

let control;

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let options = new primitives.famdiagram.Config();
  options.annotations = ANNOTATIONS;
  options.items = MAIN_TREE;

  // Template
  options.defaultTemplateName = Template.NAME;
  options.onItemRender = Template.render;
  options.templates = [Template.get()];
  options.updateMode = primitives.common.UpdateMode.Recreate;

  // Connectors
  options.arrowsDirection = primitives.common.GroupByType.None;
  options.bevelSize = 9;
  options.connectorType = primitives.common.ConnectorType.Curved;
  options.elbowDotSize = 0;
  options.elbowType = primitives.common.ElbowType.Round;
  options.showExtraArrows = false;

  // Spacing
  options.lineItemsInterval = 50;
  options.lineLevelShift = 30;
  options.linesWidth = 2;
  options.normalItemsInterval = 13;
  options.normalLevelShift = 26;
  options.pageFitMode = primitives.common.PageFitMode.None;

  options.linesColor = Color.LINE;

  control = primitives.famdiagram.Control(document.getElementById('tree'), options);

  $('#tree').children().first().addClass('dragscroll');

  // Scroll to main node
  let scrollableElement = $('#tree').children().first().children().first();
  $('#tree').children().first().scrollTop((scrollableElement.height() - $(window).height()) / 2);
  $('#tree').children().first().scrollLeft((scrollableElement.width() - $(window).width()) / 2);

  let IntQuery = parseInt(QUERY);
  if (Number.isInteger(IntQuery)) {
    let mainNode = Utils.getNode(IntQuery, MAIN_TREE);
    $('#search-form-input').val(mainNode.fullfullname);
    document.title = mainNode.fullfullname + ' | Family Tree';
  }
  else {
    $('#search-form-input').val(QUERY);
  }

  switch(window.location.protocol) {
   case 'http:':
   case 'https:':
     $('#home-button').attr('href', '/family/');
     break;
  }
});


// Check if there's repeating ids
let idArray = RAW_DATA.map(function(item){ return item.id });
idArray.some(function(id, idx) {
  if (idArray.indexOf(id) != idx) console.error('Duplicate ID found for Node(%d)', id);
});

for (let i = 0, imax = RAW_DATA.length; i < imax; i++) {
  let item = RAW_DATA[i];

  // Check parent lengths
  if (item.parents.length > 2) console.error('Has more than 2 parents for Node(%d)', item.id);
  if (item.parents.length != 0 && item.parents.length < 2) console.warn('Has less than 2 parents for Node(%d)', item.id);

  // Check if parent data is not available
  for (let j = 0, jmax = item.parents.length; j < jmax; j++) {
    let parent = Utils.getNode(item.parents[j], RAW_DATA);
    if (!parent) console.error('Parent(%d) not found for Node(%d)', item.parents[j], item.id);
  }

  // Check if parents and spouses has intersect
  let milf = Utils.getArrayIntersection(item.parents, item.spouses);
  if (milf.length != 0) {
    console.error('Parent-Spouse intersection found for Node(%d):', item.id, milf);
  }

  // Check if parents and siblings has intersect
  let weird = Utils.getArrayIntersection(item.parents, item.siblings);
  if (weird.length != 0) {
    console.error('Parent-Sibling intersection found for Node(%d):', item.id, weird);
  }

  // Check if spouses and siblings has intersect
  let incest = Utils.getArrayIntersection(item.spouses, item.siblings);
  if (incest.length != 0) {
    console.warn('Spouse-Sibling intersection found for Node(%d):', item.id, incest);
  }

  // Get parent surnames
  let motherLast = null;
  let fatherLast = null;
  for (let j = 0, jmax = item.parents.length; j < jmax; j++) {
    let parent = Utils.getNode(item.parents[j], RAW_DATA);
    if (parent.gender == 0) {
      motherLast = parent.name.last;
    }
    else if (parent.gender == 1) {
      fatherLast = parent.name.last;
    }
  }

  // Check if the child name is right
  if (fatherLast && item.name.last != fatherLast && !item.status.adopted) console.warn('Invalid last name for Node(%d)', item.id);
  if (motherLast && item.name.middle != motherLast && !item.status.adopted) console.warn('Invalid middle name for Node(%d)', item.id);
}
