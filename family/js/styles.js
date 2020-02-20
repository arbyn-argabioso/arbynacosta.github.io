/* ========================================================================
 *
 * styles.js
 * Arbyn Acosta (C) 2020
 *
 * Defines all the constants needed for each node and connector styles.
 *
 * ===================================================================== */

/** Node style constants **/

const Measure = {
  Node: {
    // Node height and width in pixels
    HEIGHT: 140.4,
    WIDTH: 82.62,
  },

  Dot: {
    // Hidden dot height and widths in pixels
    HEIGHT: 3,
    WIDTH: 3,
  },

  Highlight: {
    // Thickness of highlight connectors for important nodes
    // Starting from the latest decendant in pixels
    THICKNESS: [
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
  },

  Name: {
    // Max number of characters for node fullname
    MAX_LENGTH: 18,
  },
};

/** Connector and Highlight style constants **/

const HighlightBaseCfg = {
  opacity: 1,
  zOrderType: 2,
  showArrows: false
};

const Color = {
  Body: {
    BG: '#f2f3f4',
    TEXT: '#222222',
  },

  LINE: '#afafaf',

  Node: {
    BG: '#ffffff',
    TEXT: '#222222',
  },

  Highlight: {
    TEXT: '#ffffff',
    BGS: [
      'rgb(36, 36, 36)',
      'rgb(39, 39, 39)',
      'rgb(42, 42, 42)',
      'rgb(45, 45, 45)',
      'rgb(48, 48, 48)',
      'rgb(51, 51, 51)',
      'rgb(54, 54, 54)',
      'rgb(57, 57, 57)',
      'rgb(60, 60, 60)',
    ],
  },
};
