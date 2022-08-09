/**
 * Insertion sort
 * Pick 2nd element in the array to start
 * compare it with the one before it and swap if needed
 * continue to the next element, and if it is in incorrect order,
 * iterate through the sorted portion to place it
 * repeat until array is sorted
 * Big-O: best case O(n), worst case O(n^2)
 * @param {Array} arr array to sort
 * @returns {Array} array sorted in ascending order
 */
function insertionSort(arr) {
  if (!arr.length) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (;j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

module.exports = insertionSort;