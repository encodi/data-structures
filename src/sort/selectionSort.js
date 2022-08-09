/**
 * Selection sort
 * Store the first element as the min
 * Compare this min with the next array elements
 * if a smaller value is found, assign it as the new min
 * and continue until the end of the array
 * if the minimum is not the value (idx) that was at start of the step
 * swap both values
 * repeat this with the next element until the array is sorted
 * Big-O: O(n^2)
 * @param {Array} arr array to sort
 * @returns {Array} array sorted in ascending order
 */
function selectionSort(arr) {
  if (!arr.length) {
    return arr;
  }
  const swap = (arry, idx1, idx2) => {
    [arry[idx1], arry[idx2]] = [arry[idx2], arry[idx1]];
  }
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

module.exports = selectionSort;
