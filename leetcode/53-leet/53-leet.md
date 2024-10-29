# 53rd -- Roman to Integer

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer.

```js
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## Test Examples

```js

Case 1
s=
"III"

Case 2
s=
"LVIII"

Case 3
s=
"MCMXCIV"
```

## Notes

This exercise was hard for me. After trying I realize that I could just substract the value of the element if it happened to be one of these: `IV or IX, substract`; `XL or XC, subtract 10`;`CD or CM, subsctract 100`.

## My solution with comments:

```js
const romanToInt = function (s) {
  // creates an object to hold the roman equivalences to integers
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // keep track of the sum
  let sumToSubstract = 0;
  for (let i = 0; i < s.length - 1; i++) {
    // if the next element is one of the defined values, then I must substract, otherwise, I must add
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V" || s[i + 1] === "X") {
          sumToSubstract -= 1;
        } else {
          sumToSubstract += 1;
        }
        break;
      case "X":
        if (s[i + 1] === "L" || s[i + 1] === "C") {
          sumToSubstract -= 10;
        } else {
          sumToSubstract += numbers[s[i]];
        }
        break;
      case "C":
        if (s[i + 1] === "D" || s[i + 1] === "M") {
          sumToSubstract -= 100;
        } else {
          sumToSubstract += 100;
        }
        break;
      default:
        sumToSubstract += numbers[s[i]];
        break;
    }
  }
  // because the loop misses the last element, I must add whatever value it has
  sumToSubstract += numbers[s[s.length - 1]];
  return sumToSubstract;
};
```

## Results

```js
Runtime
5
ms
Beats
81.62%

Memory
55.21
MB
Beats
33.38%
```

## Interesting LeetCode solution:

> by _[Karina_Olenina](https://leetcode.com/problems/roman-to-integer/solutions/2706813/js-hash-table-with-exlanation)_

```js
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};
```

## Notes about the interesting one:

This one is very good. It basically compares if the value according to the `sym` object of the current element is less than the next one. If so, then there must be a substraction, otherwise, it adds the current element. It works with the same principle as mine, but more elegantly made.

---
