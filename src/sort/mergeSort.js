/**
 * Merge sorted arrays
 * Create empty array,
 * Check in the two inputs for the smallest value
 * While there are still values we haven't looked at
 * if val in arr1 is smaller push the value in new array and move on
 * if val in arr1 is smaller push this value instead
 * once one array values are finished we put all the others from the other arr into
 * the new array
 * @param {Array} array1 to merge
 * @param {Array} array2 to merge
 * @returns {Object} arrays divided
 */
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i += 1;
    } else {
      results.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    results.push(arr1[j]);
    j += 1;
  }
  return results;
}

/**
 * Merge sort
 * Divide and conquer with recursion
 * Big-O: best case O(n) , worst case O(n^2)
 * @param {Array} arr array to sort
 * @returns {Array} array sorted in ascending order
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}


module.exports = mergeSort;
