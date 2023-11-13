// https://leetcode.com/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getNumber(l: ListNode | null): string {
  if (l?.next != null) {
    return `${getNumber(l.next)}${l.val}`;
  }
  return `${l?.val}`;
}

function getListNode(s: string): ListNode | null {
  if (s.length == 1) {
    return new ListNode(parseInt(s));
  }
  return new ListNode(
    parseInt(s.substring(s.length - 1)),
    getListNode(s.substring(0, s.length - 1))
  );
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let n: number = parseInt(getNumber(l1)) + parseInt(getNumber(l2));
  console.log(`${getNumber(l1)}, ${getNumber(l2)}, ${n}`);
  // return getListNode(n.toString());
  return getListNode(n.toLocaleString("fullwide", { useGrouping: false }));
}

let testCase: string[][] = [
  ["243", "564"],
  ["0", "0"],
  ["9999999", "9999"],
  // ["1000000000000000000000000000001", "564"],
  ["112332145665478998723443256781", "564"],
];

console.log(
  addTwoNumbers(getListNode(testCase[0][0]), getListNode(testCase[0][1]))
);
console.log(
  addTwoNumbers(getListNode(testCase[1][0]), getListNode(testCase[1][1]))
);
console.log(
  addTwoNumbers(getListNode(testCase[2][0]), getListNode(testCase[2][1]))
);
console.log(
  addTwoNumbers(getListNode(testCase[3][0]), getListNode(testCase[3][1]))
);
