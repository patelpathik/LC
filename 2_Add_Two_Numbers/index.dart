// https://leetcode.com/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */

class ListNode {
  int val;
  ListNode? next;
  ListNode([this.val = 0, this.next]);
}

class Solution {
  ListNode? addTwoNumbers(ListNode? l1, ListNode? l2) {
    if (l1 != null && l2 != null) {
      BigInt one = BigInt.parse(getNumber(l1));
      BigInt two = BigInt.parse(getNumber(l2));
      BigInt n = one + two;
      print("$one + $two = $n");
      return getListNode(n.toString());
    } else {
      return null;
    }
  }
}

ListNode? getListNode(String s) {
  if (s.length == 1) {
    return ListNode(BigInt.parse(s).toInt());
  }
  return ListNode(
    BigInt.parse(s.substring(s.length - 1)).toInt(),
    getListNode(s.substring(0, s.length - 1)),
  );
}

String getNumber(ListNode l) {
  if (l.next != null) {
    return "${l.val}${getNumber(l.next!)}";
  }
  return "${l.val}";
}

void main() {
  List<List<String>> testCase = [
    ["243", "564"],
    ["0", "0"],
    ["9999999", "9999"],
    ["1000000000000000000000000000001", "564"],
    ["112332145665478998723443256781", "564"],
    ["249", "5649"]
  ];

  testCase.forEach((t) {
    ListNode? l = Solution().addTwoNumbers(
      getListNode(t[0]),
      getListNode(t[1]),
    );

    if (l != null) {
      // print(l);
      // print("${t[0]} + ${t[1]} = ${getNumber(l)}\n");
    }
  });
}
