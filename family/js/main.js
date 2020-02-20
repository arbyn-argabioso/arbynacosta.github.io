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

  Utils.checkTree(RAW_TREE_DATA);
});
