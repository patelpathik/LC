// https://leetcode.com/problems/richest-customer-wealth/

function maximumWealth(accounts: number[][]): number {
  let w: number = 0;
  for (let i: number = 0; i < accounts.length; i++) {
    let x: number = 0;
    for (let j: number = 0; j < accounts[i].length; j++) {
      x += accounts[i][j];
    }
    if (x > w) w = x;
  }

  return w;
}

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));