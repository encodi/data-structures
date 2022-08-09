/**
 * Linear search goes through all the array one by one to find the string index
 * Big-O: O(n)
 * @param {Array} strArray array to search at
 * @param {String} strSearch string searched
 * @returns {Number} index
 */
function linearSearch(strArray, strSearch) {
  if (!strArray.length || !strSearch.length) {
    return -1;
  }
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].toLowerCase() === strSearch.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

module.exports = linearSearch;
