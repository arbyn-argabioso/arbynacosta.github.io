/* ========================================================================
 *
 * template.js
 * Arbyn Acosta Copyright 2020
 *
 * Defines the template used by tree to generate each item.
 *
 * Dependencies:
 *   - jquery.js
 *   - configs.js
 *
 * ===================================================================== */

/** Constants and Enums **/

const loc = window.location.pathname;
const url = loc.substring(0, loc.lastIndexOf('/')) + (loc.includes('.html') ? '/index.html' : '');

const classes = {
  item: 'tree-item',

  imgWrapper: 'item-img-container',
  img: 'item-img',

  detailsWrapper: 'item-details-container',
  details: 'item-details',
  displayname: 'displayname',
  liferange: 'liferange',
};

const template = function()
{
  'use strict';

  let result = new primitives.famdiagram.TemplateConfig();

  result.name = 'TreeItemTemplate';
  result.isActive = false;
  result.itemSize = new primitives.common.Size(style.item.width, style.item.height);
  result.minimizedItemSize = new primitives.common.Size(style.dot.width, style.dot.height);

  result.itemTemplate = [
    'a', {
      'class': [classes.item],
      'style': {
        'height': result.itemSize.height + 'px',
        'width': result.itemSize.width + 'px',
      },
    },
    [
      'div', {
        'class': [classes.imgWrapper],
        'style': {
          'height': result.itemSize.width + 'px',
        },
      },
      [
        'figure', {
          'name': classes.img,
          'class': [classes.img],
          'style': {
            'height': result.itemSize.width + 'px',
          },
        },
      ],
    ],
    [
      'div', {
        'class': [classes.details],
        'style': {
          'height': (result.itemSize.height - result.itemSize.width) + 'px',
        }
      },
      [
        'div', {
          'class': [classes.detailsWrapper],
          'style': {
            'height': (result.itemSize.height - result.itemSize.width) + 'px',
            'width': result.itemSize.width + 'px'
          },
        },
        [
          'div', {
            'name': classes.displayname,
            'class': [classes.displayname]
          },
        ],
        [
          'div', {
            'name': classes.liferange,
            'class': [classes.liferange]
          },
        ],
      ],
    ],
  ];

  result.render = function(event, data)
  {
    'use strict';

    let item = data.context;
    let itemElement = $(data.element);

    // Preprocesses
    item.displayname = getDisplayName(item, style.name.lengthThreshold);
    item.displaygender = getDisplayGender(item);
    item.liferange = getLifeRange(item);

    // Move the node image position depending on the image.id node information
    let nodeImg = itemElement.children('.' + classes.imgWrapper).children('.' + classes.img);
    nodeImg.css({
      'background-position-x': (item.extracted ? (item.idx + 2) : item.displaygender) * (-1 * style.item.width),
    });

    // Iterate through each child of details container and fetch the values from the data
    let itemDetails = itemElement.children('.' + classes.details);
    let itemDetailsChildren = itemDetails.children('.' + classes.detailsWrapper).children();
    itemDetailsChildren.each(function() {
      let itemPropertyName = $(this).attr('name');
      $(this).text(item[itemPropertyName]);
    });

    // Add special highlight class based on importance
    let importance = item['importance'];
    if (importance != null || importance != undefined) {
      itemDetails.css({
        'background-color': style.highlight.background.colors[importance],
        'color': style.highlight.text.color,
      });
    }
    else {
      itemDetails.css({
        'background-color': style.item.background.color,
        'color': style.item.text.color,
      });
    }

    // Add filtered link to each item
    itemElement.attr({
      'onClick': 'updatePersons(\'' + item.id + '\')'
    });
  }

  return result;
}();
