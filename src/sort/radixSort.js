/**
 * Method helper that returns the digit in num at the given place value
 *
 * @param {Number} num to retrieve digit from
 * @param {Number} place to use as index
 * @returns {Number} digit returned
 */
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * Method helper that returns the number of digits in a number
 *
 * @param {Number} num to check
 * @returns {Number} number of digits
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Method helper that returns the number of digits in the largest number
 * in a list given an array
 *
 * @param {Array} arr to check
 * @returns {Number} number of digits
 */
function mostDigits(arr) {
  let maxDigits = 0;
  for (const number of arr) {
    maxDigits = Math.max(maxDigits, digitCount(number));
  }
  return maxDigits;
}

/**
 * radixSort
 * Figure out how many digits the largest number has in a list
 * Loop from i=0 to the largest number of digits
 * For each iteration:
 *    Create buckets for each digit (0 to 9)
 *    place each number in the corresponding bucket based on its i'sh digit
 * Replace our existing array with values in our buckets,
 * starting with 0 to 9
 * Return list at the end!
 *
 * @param {Array} arr of elements to be sorted
 * @returns {Array} sorted
 * Big O: Best case O(nk), Worst case O(nk)
 */
function radixSort(arr) {
  let maxDigitsCount = mostDigits(arr);
  for (let i = 0; i < maxDigitsCount; i += 1) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j += 1) { // NOSONAR - to be refactored
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }
}

module.exports = radixSort;