// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
function numberOfSteps(num: number): number {
  let i: number = 0;
  while (num != 0) {
    if (num % 2 == 0) num /= 2;
    else num--;
    i++;
  }
  return i;
}

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));