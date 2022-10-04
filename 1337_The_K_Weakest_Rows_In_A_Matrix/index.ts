// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
function kWeakestRows(mat: number[][], k: number): number[] {
  let x: any[] = [];

  for (let i: number = 0; i < mat.length; i++) {
    let c: number = 0;
    for (let j: number = 0; j < mat[i].length; j++) {
      if (mat[i][j] == 1) c++;
    }
    let d: any = {};
    d['i'] = i;
    d['count'] = c;
    x.push(d);
  }

  x.sort((a, b) => {
    if (a['count'] > b['count']) {
      return 1;
    }
    else if (a['count'] == b['count']) {
      if (a['i'] < b['i']) return -1;
      else return 1;
    } else {
      return -1;
    }
  });

  return Array.from({ length: k }, (_, i) => x[i]['i']);
}

let mat1: number[][] = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

let mat2: number[][] = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];

let case1: number[] = kWeakestRows(mat1, 3);
let case2: number[] = kWeakestRows(mat2, 2);

console.log(case1);
console.log(case2);