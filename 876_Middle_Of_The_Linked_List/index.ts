// https://leetcode.com/problems/middle-of-the-linked-list/

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

function middleNode(head: ListNode | null): ListNode | null {
  if (head != null) {
    let h: ListNode | null = head;
    let c: number = 0;

    while (h != null) {
      c++;
      h = h.next;
    }

    let t: number = parseInt((c / 2).toFixed(0));
    if (c % 2 == 0) t++;

    console.log(t);


    let a: ListNode | null = head;

    while (t != 1) {
      a = a!.next;
      t--;
    }
    return a;
  }
  return null;
}

let case1: ListNode = new ListNode(
  1, new ListNode(
    2, new ListNode(
      3, new ListNode(
        4, new ListNode(
          5
        )
      )
    ),
  ),
);

let case2: ListNode = new ListNode(
  1, new ListNode(
    2, new ListNode(
      3, new ListNode(
        4, new ListNode(
          5, new ListNode(
            6
          )
        )
      )
    ),
  ),
);

console.log(middleNode(case1));
console.log(middleNode(case2));