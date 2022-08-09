/**
 * Bubble sort
 * Loop from end to start with i
 * Inner loop from j start to i-1
 * if arr[j] > arr[j+1] swap
 * return sorted array
 * Big-O: best case O(n) , worst case O(n^2)
 * @param {Array} arr array to sort
 * @returns {Array} array sorted in ascending order
 */
function bubbleSort(arr) {
  if (!arr.length) {
    return arr;
  }
  let noSwaps;
  const swap = (arry, idx1, idx2) => {
    [arry[idx1], arry[idx2]] = [arry[idx2], arry[idx1]];
  }
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

module.exports = bubbleSort;
