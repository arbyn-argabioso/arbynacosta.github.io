/* ========================================================================
 *
 * template.js
 * Arbyn Acosta Copyright 2020
 *
 * Defines the template used by tree to generate each node.
 *
 * Dependencies:
 *   - jquery.js
 *   - styles.js
 *
 * ===================================================================== */

const Class = {

  /** Constants and Enums **/

  NODE: 'tree-node',

  IMG_WRAPPER: 'node-img-container',
  IMG: 'node-img',

  DETAILS_WRAPPER: 'node-details-container',
  DETAILS: 'node-details',
  FULLNAME: 'fullname',
  LIFE_RANGE: 'life',
};

const Template = {

  /** Constants and Enums **/

  NAME: 'TreeNodeTemplate',

  /** Functions **/

  /**
   *
   * Returns the template to be used for each node of the family tree.
   *
   */
  get: function()
  {
    'use strict';

    let result = new primitives.famdiagram.TemplateConfig();

    result.name = this.NAME;
    result.isActive = false;
    result.itemSize = new primitives.common.Size(Measure.Node.WIDTH, Measure.Node.HEIGHT);
    result.minimizedItemSize = new primitives.common.Size(Measure.Dot.WIDTH, Measure.Dot.HEIGHT);

    result.itemTemplate = [
      'a', {
        'class': [Class.NODE],
        'style': {
          'height': result.itemSize.height + 'px',
          'width': result.itemSize.width + 'px'
        },
      },
      [
        'div', {
          'class': [Class.IMG_WRAPPER],
          'style': {
            'height': result.itemSize.width + 'px',
          }
        },
        [
          'figure', {
            'name': Class.IMG,
            'class': [Class.IMG],
            'style': {
              'height': result.itemSize.width + 'px',
            }
          },
        ],
      ],
      [
        'div', {
          'class': [Class.DETAILS],
          'style': {
            'height': (result.itemSize.height - result.itemSize.width) + 'px',
          }
        },
        [
          'div', {
            'class': [Class.DETAILS_WRAPPER],
            'style': {
              'height': (result.itemSize.height - result.itemSize.width) + 'px',
              'width': result.itemSize.width + 'px'
            },
          },
          [
            'div', {
              'name': Class.FULLNAME,
              'class': [Class.FULLNAME]
            }
          ],
          [
            'div', {
              'name': Class.LIFE_RANGE,
              'class': [Class.LIFE_RANGE]
            }
          ]
        ]
      ]
    ];

    return result;
  },

  render: function(event, data)
  {
    'use strict';

    let cfg = data.context;
    let item = $(data.element);

    // Iterate through each child of details container and fetch the values from the data
    let nodeDetails = item.children('.' + Class.DETAILS);
    let nodeDetailsChildren = nodeDetails.children('.' + Class.DETAILS_WRAPPER).children();
    nodeDetailsChildren.each(function() {
      let cfgName = $(this).attr('name');
      $(this).text(cfg[cfgName]);
    });

    // Move the node image position depending on the image.id node information
    let nodeImg = item.children('.' + Class.IMG_WRAPPER).children('.' + Class.IMG);
    nodeImg.css({
      'background-position-x': ((cfg.image.id !== null) ? (cfg.image.id + 2) : (cfg.gender)) * (-1 * Measure.Node.WIDTH),
    });

    // Add special highlight class based on importance
    let importance = cfg['importance'];
    if (importance != null || importance != undefined) {
      nodeDetails.css({
        'background-color': Color.Highlight.BGS[importance],
        'color': Color.Highlight.TEXT,
      });
    }
    else {
      nodeDetails.css({
        'background-color': Color.Node.BG,
        'color': Color.Node.TEXT,
      });
    }

    // Add filtered link to each node
    item.attr('href', LOC.substring(0, LOC.lastIndexOf('/')) + (IS_DEV ? '/index.html' : '') + '?q=' + cfg.id);
  },

};
