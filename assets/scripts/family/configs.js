/* ========================================================================
 *
 * configs.js
 * Arbyn Acosta (C) 2020
 *
 * Defines all the constants needed for each item and connector styles.
 *
 * ===================================================================== */

/** Style helper methods **/

/*
 * Returns the CSS RGBA style string value given the actual RGBA values.
 *
 * @param {Number} red The amount of red (0-255)
 * @param {Number} green The amount of green (0-255)
 * @param {Number} blue The amount of blue (0-255)
 * @param {Number} alpha The opacity of the color (0-1)
 * @return {Text} The RGBA CSS style value string
 */
function RGBa(red, green, blue, alpha)
{
  // Default alpha to 1
  if (!alpha) {
    alpha = 1;
  }

  return 'rgba(' + [red, green, blue, alpha].join(', ') + ')';
}

/** Item style constants **/

const style = {

  item: {
    background: {
      color: RGBa(255, 255, 255),
    },
    text: {
      color: RGBa(34, 34, 34),
    },

    // Item height and width in pixels
    height: 156.4,
    width: 92.62,
  },

  dot: {
    // Hidden dot height and widths in pixels
    height: 3,
    width: 3,
  },

  line: {
    color: RGBa(175, 175, 175),
  },

  highlight: {
    // Thickness of highlight connectors for important items
    // Starting from the latest decendant in pixels
    thickness: [
      3.5000,
      3.3125,
      3.1250,
      2.9375,
      2.7500,
      2.5625,
      2.3750,
      2.1875,
      2.0000,
    ],

    text: {
      color: RGBa(255, 255, 255),
    },

    background: {
      colors: [
        RGBa(36, 36, 36),
        RGBa(39, 39, 39),
        RGBa(42, 42, 42),
        RGBa(45, 45, 45),
        RGBa(48, 48, 48),
        RGBa(51, 51, 51),
        RGBa(54, 54, 54),
        RGBa(57, 57, 57),
        RGBa(60, 60, 60),
      ],
    },

    opacity: 1,
    zOrderType: 2,
    showArrows: false
  },

  name: {
    // Max number of characters for item fullname
    lengthThreshold: 23,
  },

  body: {
    background: {
      color: RGBa(242, 243, 244),
    },
    text: {
      color: RGBa(34, 34, 34),
    },
  },

};

/** Family Tree Options **/

let config = {

  // Connectors
  arrowsDirection: primitives.common.GroupByType.None,
  bevelSize: 9,
  connectorType: primitives.common.ConnectorType.Curved,
  elbowDotSize: 0,
  elbowType: primitives.common.ElbowType.Round,
  linesColor: style.line.color,
  showExtraArrows: false,

  // Spacing
  lineItemsInterval: 50,
  lineLevelShift: 30,
  linesWidth: 2,
  normalItemsInterval: 13,
  normalLevelShift: 26,

  // Layout
  pageFitMode: primitives.common.PageFitMode.None,
  updateMode: primitives.common.UpdateMode.Recreate,

};
