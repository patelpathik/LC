// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
  let r: string[] = s.toUpperCase().split("");
  let f: string[] = [];
  let c: number = 0;
  for (let i: number = 0; i < r.length; i++) {
    if (
      (r[i] == "I" && (r[i + 1] == "V" || r[i + 1] == "X")) ||
      (r[i] == "X" && (r[i + 1] == "L" || r[i + 1] == "C")) ||
      (r[i] == "C" && (r[i + 1] == "D" || r[i + 1] == "M"))
    ) {
      f[c] = `${r[i]}${r[i + 1]}`;
      i++;
    }
    else {
      f[c] = `${r[i]}`;
    }
    c++;
  }

  // console.log(f);

  let a = 0;
  f.forEach((c) => a += rMapping(c));

  return a;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

function rMapping(s: string): number {
  switch (s) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;

    // * special
    case 'IV': return 4;
    case 'IX': return 9;
    case 'XL': return 40;
    case 'XC': return 90;
    case 'CD': return 400;
    case 'CM': default: return 900;
  }
}