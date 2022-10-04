// https://leetcode.com/problems/palindrome-linked-list/
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
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let s: string = "";
  if (head != null) {
    let h: ListNode | null = head;
    while (h != null) {
      s += `${h.val}`;
      h = h.next;
    }
  }
  return s.split("").reverse().join("") == s;
}

let case1: ListNode = new ListNode(
  1, new ListNode(
    2, new ListNode(
      2, new ListNode(
        1
      )
    )
  )
);

let case2: ListNode = new ListNode(
  1, new ListNode(
    2
  )
);

console.log(isPalindrome(case1));
console.log(isPalindrome(case2));