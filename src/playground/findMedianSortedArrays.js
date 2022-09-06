/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArrays = [...nums1, ...nums2];
    mergedArrays.sort((a,b) => (a-b));
    const maxLength = mergedArrays.length;
    let median;
    if (maxLength === 0) return 0;
    if (maxLength === 1) return mergedArrays[0];
    if (maxLength === 2) return (mergedArrays[0] + mergedArrays[1]) / 2;
    if (maxLength % 2 === 0) {
      median = (mergedArrays[((maxLength / 2) - 1)] + mergedArrays[(maxLength / 2)]) / 2;
    } else {
      median = mergedArrays[Math.floor(maxLength/2)];
    }
    return median;
};