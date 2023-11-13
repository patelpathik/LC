// https://leetcode.com/problems/longest-palindromic-substring/description/

class Solution {
  bool isPalindrome(String s) {
    return s == s.split("").reversed.toList().join("");
  }

  String longestPalindrome(String s) {
    String longestPalStr = "";
    if (isPalindrome(s)) {
      return s;
    } else {
      int i = s.length - 1;
      while (i != 0) {
        String str = s.substring(0, i);
        if (isPalindrome(str)) {
          if (str.length > longestPalStr.length) {
            longestPalStr = str;
          }
        }
        i--;
      }
      i = 0;
      while (i != s.length) {
        String str = s.substring(i);
        if (isPalindrome(str)) {
          if (str.length > longestPalStr.length) {
            longestPalStr = str;
          }
        }
        i++;
      }
      bool v = true;
      i = 0;
      int j = s.length - 1;
      while (i != j) {
        String p = s.substring(i, j);
        if (isPalindrome(p)) {
          if (p.length > longestPalStr.length) longestPalStr = p;
        }
        if (v) {
          i++;
        } else {
          j--;
        }
        v = !v;
      }
    }
    return longestPalStr;
  }
}

void main() {
  List<String> testCase = [
    // "babad", // bab/aba
    // "cbbd", // bb
    // "abb", // bb
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  ];

  testCase.forEach((t) {
    print("$t ${Solution().longestPalindrome(t)}");
  });
}
