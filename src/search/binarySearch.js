/**
 * Binary search for strings needs an ordered array to be used
 * First assign a left pointer at the start and a right pointer at the end
 * While the left pointer comes before the right one
 * create a pointer in the middle
 * if value is found, return the index
 * if the value is too small, move left pointer up
 * if the value is too large, move right pointer down
 * if value is never found returns -1
 * Big-O: worst case O(log n), best case O(1)
 * @param {Array} strArray array to search at
 * @param {String} strSearch string searched
 * @returns {Number} index
 */
function binarySearch(strArray, strSearch) {
  if (!strArray.length || !strSearch.length) {
    return -1;
  }
  let left = 0;
  let right = strArray.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left < right) {
    if (strArray[middle].toLowerCase() === strSearch.toLowerCase()) {
      return middle;
    } else if (strArray[left].toLowerCase() === strSearch.toLowerCase()) {
      return left;
    } else if (strArray[right].toLowerCase() === strSearch.toLowerCase()) {
      return right;
    } else if (strArray[middle].toLowerCase() < strSearch.toLowerCase()) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    } else {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    }
  }
  return -1;
}

module.exports = binarySearch;
