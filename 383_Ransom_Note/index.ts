// https://leetcode.com/problems/ransom-note/
function canConstruct(ransomNote: string, magazine: string): boolean {
  let r: string[] = ransomNote.split("");
  let m: string[] = magazine.split("");

  let s: boolean = true;

  for (let c of r) {
    if (m.indexOf(c) == -1) {
      s = false;
      break;
    } else {
      m.splice(m.indexOf(c), 1);
    }
  }

  return s;
}

let case1: boolean = canConstruct("a", "b");
let case2: boolean = canConstruct("aa", "ab");
let case3: boolean = canConstruct("aa", "aab");

console.log(case1);
console.log(case2);
console.log(case3);