// https://leetcode.com/problems/fizz-buzz/
function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    if (((i + 1) % 3 == 0) && ((i + 1) % 5 == 0)) return "FizzBuzz";
    else if ((i + 1) % 3 == 0) return "Fizz";
    else if ((i + 1) % 5 == 0) return "Buzz";
    return `${(i + 1)}`;
  });
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));