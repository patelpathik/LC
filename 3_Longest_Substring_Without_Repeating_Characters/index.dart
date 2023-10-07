// https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution {
  int lengthOfLongestSubstring(String s) {
    List<String> chs = [];
    int maxLen = 0;

    s.split("").forEach((c) {
      if (!chs.contains(c)) {
        chs.add(c);
      } else {
        maxLen = chs.length > maxLen ? chs.length : maxLen;
        if (chs.length == 1) {
          chs = [c];
        } else {
          chs = [...chs.sublist(chs.indexOf(c) + 1), c];
        }
      }
    });
    maxLen = chs.length > maxLen ? chs.length : maxLen;

    return maxLen;
  }
}

void main() {
  List<String> testCase = [
    "abcabcbb", // 3
    "bbbbb", // 1
    "pwwkew", // 3
    "dvdf", // 3
  ];

  testCase.forEach((t) {
    print("${Solution().lengthOfLongestSubstring(t)}\t$t");
  });
}
