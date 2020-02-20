/* ========================================================================
 *
 * utils.js
 * Arbyn Acosta (C) 2020
 *
 * Defines a handful of helper functions for better modularization.
 *
 * ===================================================================== */

const Utils = {

  /** Functions **/

  /*
   * Returns the width of the rendered document
   *
   * @return {Number} The biggest width value of the screen or browser
   */
  getDocumentWidth: function()
  {
    'use strict';

    return Math.max(
      document.body.offsetWidth,
      document.body.scrollWidth,
      document.documentElement.clientWidth,
      document.documentElement.offsetWidth,
      document.documentElement.scrollWidth,
    );
  },

  /*
   * Returns the value of the indicated URL parameter name
   *
   * @param {Text} paramName The URL parameter name to get the value of
   * @return {Text} The value of the URL parameter specified
   */
  getURLParam: function(paramName)
  {
    'use strict';

    const urlParams = new URLSearchParams(window.location.search);
    let paramValue = urlParams.get(paramName) ? urlParams.get(paramName) : null;

    // Try the modern URLSearchParams first
    let result = null;
    if (paramValue !== null && paramValue !== undefined) {
      result = paramValue.toLowerCase();
    }

    // Use regex on location.href if URLSearchParams is not supported
    paramValue = new RegExp('[\?&]' + paramName + '=([^&#]*)').exec(window.location.href);
    if (paramValue == null || (paramValue && !paramValue[1])) {
      return null;
    }
    else {
      result = decodeURI(paramValue[1]).toLowerCase();
    }

    return result.trimStart().trimEnd().replace(/\s\s+/g, ' ');
  },

  /*
   * Finds all the intersecting elements of two arrays.
   *
   * @param {Array} a1 The first array to check for intersection
   * @param {Array} a2 The second array to check for intersection
   * @return {Array} An array containing the intersecting elements
   */
  getArrayIntersection: function(a1, a2)
  {
    return a1.filter(value => a2.includes(value))
  },

  /*
   * Searches a tree object for a node containing the given ID
   *
   * @param {Number} id The node ID we want to get
   * @param {Array} tree An array of objects where each element has an id property
   * @return {Object} Returns the node object if found. Otherwise, null.
   */
  getNode: function(id, tree)
  {
    'use strict';

    let nodeIndex = tree.map(function(x) {
      return x.id;
    }).indexOf(id);

    return tree[nodeIndex];
  },

  getEditDistance: function(s1, s2)
  {
    'use strict';

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  },

  getLikeness: function(s1, s2)
  {
    'use strict';

    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }

    let longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }

    return (longerLength - this.getEditDistance(longer, shorter)) / parseFloat(longerLength);
  },

  isQueryInNode: function(query, node)
  {
    'use strict';

    if (!query) {
      return false;
    }

    let IntQuery = parseInt(query);
    if (Number.isInteger(IntQuery)) {
      return node.id === IntQuery
    }

    let queryParts = query.toLowerCase().split(' ');

    let nameParts = [];
    for (let i = 0, imax = node.name.nick.length; i < imax; i++) {
      nameParts.push(node.name.nick[i].toLowerCase());
    }
    if (node.name.last) nameParts = nameParts.concat(node.name.last.toLowerCase().split(' '));
    if (node.name.first) nameParts = nameParts.concat(node.name.first.toLowerCase().split(' '));
    if (node.name.middle) nameParts = nameParts.concat(node.name.middle.toLowerCase().split(' '));
    if (node.name.suffix.family) nameParts = nameParts.concat(node.name.suffix.family.toLowerCase().split(' '));

    let overallLikeness = 0;
    for (let i = 0, imax = queryParts.length; i < imax; i++) {
      let queryLikeness = 0;
      for (let j = 0, jmax = nameParts.length; j < jmax; j++) {
        let nameLikeness = Utils.getLikeness(queryParts[i], nameParts[j]);
        if (nameLikeness > queryLikeness) {
          queryLikeness = nameLikeness;
        }
      }
      overallLikeness += queryLikeness;
    }
    overallLikeness /= queryParts.length;

    if (overallLikeness > 0.72) console.log('Likeness threshold reached for Node(%d): %.4f', node.id, overallLikeness);
    return (overallLikeness > 0.72);
  },

};
