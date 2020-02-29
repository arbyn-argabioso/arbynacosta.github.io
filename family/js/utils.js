/* ========================================================================
 *
 * utils.js
 * Arbyn Acosta (C) 2020
 *
 * Defines a handful of helper functions for better modularization.
 *
 * ===================================================================== */

const print = console.log

/*
 * Returns the width of the rendered document
 *
 * @return {Number} The biggest width value of the screen or browser
 */
document.body.width = function()
{
  'use strict';

  return Math.max(
    document.body.offsetWidth,
    document.body.scrollWidth,
    document.documentElement.clientWidth,
    document.documentElement.offsetWidth,
    document.documentElement.scrollWidth,
  );
}();

/*
 * Left/Start trim for strings
 */
String.prototype.ltrim = function()
{
  return this.replace(/^\s+/g, '');
}

/*
 * Right/End trim for strings
 */
String.prototype.rtrim = function()
{
  return this.replace(/\s+$/g, '');
}

/*
 * Returns the value of the indicated URL parameter name
 *
 * @param {Text} name The URL parameter name to get the value of
 * @return {Text} The value of the URL parameter specified
 */
window.location.get = function(name)
{
  'use strict';

  // Use regex on location.href if URLSearchParams is not supported
  let paramValue = new RegExp('[\?&]' + name + '=([^&#]*)').exec(this.href);
  if (paramValue == null || (paramValue && !paramValue[1])) {
    return null;
  }
  else {
    return decodeURI(paramValue[1]).ltrim().rtrim().replace(/\s\s+/g, ' ');
  }
};

/*
 * Finds all the intersecting elements of two arrays.
 *
 * @param {Array} array1 The first array to check for intersection
 * @param {Array} array2 The second array to check for intersection
 * @return {Array} An array containing the intersecting elements
 */
Array.prototype.intersect = function(other)
{
  return this.filter(value => other.includes(value))
};

/*
 * Get how dissimilar two strings are. "Dissimilarity" is
 * measured by the number of operations or character changes
 * it would take to make the two string the same.
 *
 * @param {Text} other The string to compare to
 * @return {Number} count of character changes to make the
 *                  two strings similar.
 */
function getEditDistance(s1, s2)
{
  'use strict';

  // Convert both strings to lowercase to remove
  // unneccesary case handling
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = [];
  for (let i = 0, imax = s1.length; i <= imax; i++) {
    let lastValue = i;
    for (let j = 0, jmax = s2.length; j <= jmax; j++) {
      if (i == 0) {
        costs[j] = j;
      }
      else {
        if (j > 0) {
          let newValue = costs[j - 1];

          if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }

          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }

    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }

  return costs[s2.length];
};

/*
 * Returns a percentage of how "similar" two strings are.
 * Uses edit distance as one of its components.
 *
 * @param {Text} other The string to compare to
 * @return {Number} A number from 0 to 1 to signify "similarity"
 */
String.prototype.compare = function(other)
{
  'use strict';

  let longer = this;
  let shorter = other;
  if (this.length < other.length) {
    longer = other;
    shorter = this;
  }

  if (longer.length == 0) {
    return 1.0;
  }

  return (longer.length - getEditDistance(longer, shorter)) / parseFloat(longer.length);
};

/*
 * Returns the element given a id property value.
 *
 * @param {Text} value The id value of the element were trying to get.
 * @return {Object} The element object that matched the id
 */
Array.prototype.getby = function(value, property)
{
  'use strict';

  // Default to id property search
  if (!property) {
    property = 'id';
  }

  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i][property] == value) {
      return this[i];
    }
  }

  return null;
}

/*
 * Returns the element given a parent property value.
 *
 * @param {Array} value The parents value of the element were trying to get.
 * @return {Array} An array of the element object that matched the parents
 */
Array.prototype.getbys = function(value, property)
{
  'use strict';

  // Default to id property search
  if (!property) {
    property = 'id';
  }

  let result = [];
  for (let i = this.length - 1; i >= 0; i--) {
    let propertyValue = this[i][property];

    // Use intersect when it comes to parents
    if (Array.isArray(value) && Array.isArray(propertyValue) &&
        propertyValue.intersect(value).length != 0) {
      result.push(this[i]);
    }
  }

  return result;
}
