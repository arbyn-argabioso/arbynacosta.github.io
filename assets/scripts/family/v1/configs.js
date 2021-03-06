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
      3.5000, 3.4750, 3.4500, 3.4250, 3.4000, 3.3750, 3.3500, 3.3250, 3.3000,
      3.2750, 3.2500, 3.2250, 3.2000, 3.1750, 3.1500, 3.1250, 3.1000, 3.0750,
      3.0500, 3.0250, 3.0000, 2.9750, 2.9500, 2.9250, 2.9000, 2.8750, 2.8500,
      2.8250, 2.8000, 2.7750, 2.7500, 2.7250, 2.7000, 2.6750, 2.6500, 2.6250,
      2.6000, 2.5750, 2.5500, 2.5250, 2.5000, 2.4750, 2.4500, 2.4250, 2.4000,
      2.3750, 2.3500, 2.3250, 2.3000, 2.2750, 2.2500, 2.2250, 2.2000, 2.1750,
      2.1500, 2.1250, 2.1000, 2.0750, 2.0500, 2.0250, 2.0000
    ],

    text: {
      color: RGBa(255, 255, 255),
    },

    background: {
      colors: [
        RGBa(36, 36, 36), RGBa(37, 37, 37), RGBa(38, 38, 38), RGBa(39, 39, 39),
        RGBa(40, 40, 40), RGBa(41, 41, 41), RGBa(42, 42, 42), RGBa(43, 43, 43),
        RGBa(44, 44, 44), RGBa(45, 45, 45), RGBa(46, 46, 46), RGBa(47, 47, 47),
        RGBa(48, 48, 48), RGBa(49, 49, 49), RGBa(50, 50, 50), RGBa(51, 51, 51),
        RGBa(52, 52, 52), RGBa(53, 53, 53), RGBa(54, 54, 54), RGBa(55, 55, 55),
        RGBa(56, 56, 56), RGBa(57, 57, 57), RGBa(58, 58, 58), RGBa(59, 59, 59),
        RGBa(60, 60, 60), RGBa(61, 61, 61), RGBa(62, 62, 62), RGBa(63, 63, 63),
        RGBa(64, 64, 64), RGBa(65, 65, 65), RGBa(66, 66, 66), RGBa(67, 67, 67),
        RGBa(68, 68, 68), RGBa(69, 69, 69), RGBa(70, 70, 70), RGBa(71, 71, 71),
        RGBa(72, 72, 72), RGBa(73, 73, 73), RGBa(74, 74, 74), RGBa(75, 75, 75),
        RGBa(76, 76, 76), RGBa(77, 77, 77), RGBa(78, 78, 78), RGBa(79, 79, 79),
        RGBa(80, 80, 80), RGBa(81, 81, 81), RGBa(82, 82, 82), RGBa(83, 83, 83),
        RGBa(84, 84, 84), RGBa(85, 85, 85), RGBa(86, 86, 86), RGBa(87, 87, 87),
        RGBa(88, 88, 88), RGBa(89, 89, 89), RGBa(90, 90, 90), RGBa(91, 91, 91),
        RGBa(92, 92, 92), RGBa(93, 93, 93), RGBa(94, 94, 94), RGBa(95, 95, 95),
        RGBa(96, 96, 96)
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
