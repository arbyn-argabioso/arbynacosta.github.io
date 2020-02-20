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
      return paramValue.trimStart().trimEnd().replace(/\s\s+/g, ' ');
    }

    // Use regex on location.href if URLSearchParams is not supported
    paramValue = new RegExp('[\?&]' + paramName + '=([^&#]*)').exec(window.location.href);
    if (paramValue == null || (paramValue && !paramValue[1])) {
      return null;
    }
    else {
      return decodeURI(paramValue[1]).trimStart().trimEnd().replace(/\s\s+/g, ' ');
    }
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
      return node.id === IntQuery ? 1 : 0;
    }

    let queryParts = query.split(' ');

    let nameParts = [];
    for (let i = 0, imax = node.name.nick.length; i < imax; i++) {
      nameParts.push(node.name.nick[i]);
    }
    if (node.name.last) nameParts = nameParts.concat(node.name.last.split(' '));
    if (node.name.first) nameParts = nameParts.concat(node.name.first.split(' '));
    if (node.name.middle) nameParts = nameParts.concat(node.name.middle.split(' '));
    if (node.name.suffix.family) nameParts = nameParts.concat(node.name.suffix.family.split(' '));

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

    return overallLikeness / queryParts.length;
  },

  checkTree: function(tree)
  {
    // Check if there's repeating ids
    let idArray = tree.map(function(item){ return item.id });
    idArray.some(function(id, idx) {
      if (idArray.indexOf(id) != idx) console.error('Duplicate ID found for Node(%d)', id);
    });

    for (let i = 0, imax = tree.length; i < imax; i++) {
      let item = tree[i];

      // Check parent lengths
      if (item.parents.length > 2) console.error('Has more than 2 parents for Node(%d)', item.id);
      if (item.parents.length != 0 && item.parents.length < 2) console.warn('Has less than 2 parents for Node(%d)', item.id);

      // Check if parent data is not available
      for (let j = 0, jmax = item.parents.length; j < jmax; j++) {
        let parent = Utils.getNode(item.parents[j], tree);
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
        let parent = Utils.getNode(item.parents[j], tree);
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
  }

};
