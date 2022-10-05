// https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let n: number[] = [...nums1, ...nums2].sort((x, y) => x < y ? -1 : 1);
  console.log(n);
  if (n.length % 2 == 0) {
    let i = n.length / 2;
    return (n[i - 1] + n[i]) / 2;
  }
  else {
    return n[parseInt((n.length / 2).toString())];
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));