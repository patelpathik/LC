// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  let i: number = 0;
  let j: number = i + 1;
  let e: boolean = false;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) == target) { e = true; break; }
    }
    if (e) break;
  }

  return [i, j];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));