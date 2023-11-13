// https://leetcode.com/problems/zigzag-conversion/description/
class Solution {
  String convert(String s, int numRows) {
    // // double t = s.length / numRows;
    // // String d = t.toString().substring(t.toString().indexOf(".") + 1);
    // // int c = int.parse(d) == 0 ? t.ceil() : t.toInt();
    // // int c2 = 0;
    // // print("s:$s, r:$numRows, t:$t, c:$c");
    // int j = 0;
    // List<List<String>> matrix = [];
    // for (int i = 0; s != ""; i++) {
    //   List<String> chs = [];

    //   if (j == 0) {
    //     for (j = 0; j < numRows; j++) {
    //       if (s == "") {
    //         break;
    //       }
    //       String p = s.substring(0, 1);
    //       chs.add(p);
    //       if (s.length == 1) {
    //         s = "";
    //       } else {
    //         s = s.substring(1);
    //       }
    //     }
    //     matrix.add(chs.reversed.toList());
    //     chs = [];
    //   }
    // }

    // matrix.forEach((m) {
    //   print(m);
    // });

    /**
     * 
     * I: ABCDEFGHIJKLMNOPQRSTUVWXY, 5
     * __(25/5=5)
     *   0123456789012
     * 0 A   I   Q   Y
     * 1 B  HJ  PR  X
     * 2 C G K O S W
     * 3 DF  LN  TV
     * 4 E   M   U
     * __
     * O: AIQYBHJPRXCGKOSWDFLNTVEMU
     */

    List<String> c = [];

    for (int x = 0; x < numRows; x++) {
      int i = x;
      while (1 == 1) {
        if (i >= s.length) {
          break;
        }
        if (x == 0 || x == numRows - 1) {
          c.add(getC(s, i));
          i += numRows + (numRows - 2);
          // c.add(getC(s, i));
        } else {
          c.add(getC(s, i));
          // i += numRows + x;
          i += numRows + (numRows - 2 - (x + 1));
          c.add(getC(s, i));
          i += x * (x + 1);
          // i += x * 2;
          // c.add(getC(s, i));
        }
      }
      c.add("_");
    }

    print(c);

    return s;
  }

  String getC(String s, int i) {
    if (i >= s.length) {
      return "";
    }
    int y = i + 1;
    if (y == s.length) {
      return s.substring(i);
    } else {
      return s.substring(i, y);
    }
  }
}

void main() {
  List<Map<String, int>> testCase = [
    // {"INCOGNITO": 3}, //IGONONTCI
    // {"PAYPALISHIRING": 3}, // PAHNAPLSIIGYIR
    // {"PAYPALISHIRING": 4}, // PINALSIGYAHRPI
    // {"PAYPALISHIRING": 7}, // PRAIIYHNPSGAIL
    // {"A": 1}, // A
    // {"ABCDEFGHIJKLMNOP": 4}, // AGMBFHLNCEIKODJP
    // {"ABCDEFGHIJKLMNOPQRSTUVWXYZ": 7}, // AMYBLNXZCKOWDJPVEIQUFHRTGS
    {"ABCDEFGHIJKLMNOPQRSTUVWXY": 5}, // AIQYBHJPRXCGKOSWDFLNTVEMU
  ];

  testCase.forEach((t) {
    String s = Solution().convert(t.keys.first, t.values.first);
    // print("${t.keys.first} ${t.values.first} ${s}");
  });
}

/**
 * 
 * I: INCOGNITO, 3
 * __(9/3=3)
 * I G O
 * NONT
 * C I
 * __
 * O: IGONONTCI
 * 
 */
/**
 * 
 * I: PAYPALISHIRING, 3
 * __(14/3=4.666667)
 * P A H N
 * APLSIIG
 * Y I R
 * __
 * O: PAHNAPLSIIGYIR
 * 
 */

/**
 * 
 * I: PAYPALISHIRING, 4
 * __(14/4=3.5)
 * P  I  N
 * A LS IG
 * YA HR
 * P  I
 * __
 * O: PINALSIGYAHRPI
 * 
 */
/**
 * 
 * I: PAYPALISHIRING, 7
 * __(14/4=3.5)
 * P    R
 * A   II
 * Y  H N
 * P S  G
 * AI
 * L
 * __
 * O: PRAIIYHNPSGAIL
 * 
 */
/**
 * 
 * I: ABCDEFGHIJKLMNOP, 4
 * __(16/4=4)
 * A  G  M
 * B FH LN
 * CE IK O
 * D  J  P
 * __
 * O: AGMBFHLNCEIKODJP
 * 
 */
/**
 * 
 * I: ABCDEFGHIJKLMNOPQRSTUVWXYZ, 7
 * __(26/7=3.71428)
 *   0123456789012
 * 0 A     M     Y
 * 1 B    LN    XZ
 * 2 C   K O   W
 * 3 D  J  P  V
 * 4 E I   Q U
 * 5 FH    RT
 * 6 G     S
 * __
 * O: AMYBLNXZCKOWDJPVEIQUFHRTGS
 */
/**
 * 
 * I: ABCDEFGHIJKLMNOPQRSTUVWXY, 5
 * __(25/5=5)
 *   0123456789012
 * 0 A   I   Q   Y
 * 1 B  HJ  PR  X
 * 2 C G K O S W
 * 3 DF  LN  TV
 * 4 E   M   U
 * __
 * O: AIQYBHJPRXCGKOSWDFLNTVEMU
 */
/**
 * s:26, r:7, c:?
 * 
 */