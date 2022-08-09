/**
 * Naive search to find string in another string
 * Loop over the longer string
 * Loop over the short string
 * If the characters don't match break the short string loop
 * If the characters match, keep going
 * If inner loop is completed and find a match, increment the counter of matches
 * return the count
 * Big-O: best case O(n), worst case O(n^2)
 * @param {Array} str string to search at
 * @param {String} strPattern string to search for
 * @returns {Number} count
 */
function naiveSearch(str, strPattern) {
  if (!str.length || !strPattern.length) {
    return 0;
  }
  let counterFound = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < strPattern.length; j++) {
      if (str[i+j] !== strPattern[j]) {
        break;
      }
      if (j === strPattern.length - 1) {
        counterFound++;
      }
    }
  }
  return counterFound;
}

module.exports = naiveSearch;
