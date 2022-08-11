/**
 * Select Pivot of an array and move in place
 * Grab the pivot from the start of the array
 * Store the current pivot index in a variable
 * Loop the array from start to end
 *    if pivot is greater than current element, increment pivot index variable
 *    and then swap current element with the element at the pivot index
 * Swap starting element (pivot) with the pivot index
 * Return the pivot index
 *
 * @param {Array} arr to find pivot
 * @param {Number} start index
 * @param {Number} end index
 * @returns {Number} index of pivot
 */
 function pivot(arr, start = 0, end = arr.length+1) {
  function swap(array, i , j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivotVal = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i += 1) {
    if (pivotVal > arr[i]) {
      swapIdx += 1;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

/**
 * quickSort
 * Call pivot helper
 * When helper returns the new pivot index updated,
 * recursively call pivot helper on the subarray to the left of the index,
 * and the subarray to the right of the index.
 * Base case occurs when you consider a subarray with less than 2 elements.
 * Big-O: Best case O(nlogn), Worst case O(n^2)
 * @param {Array} arr array to sort
 * @returns {Array} array sorted in ascending order
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}


module.exports = quickSort;
