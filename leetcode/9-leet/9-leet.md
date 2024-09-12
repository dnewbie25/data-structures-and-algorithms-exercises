# 9th -- Happy Number

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

```js
Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
```

## Test Examples

```js

Case 1:
Input
n = 19
Expected = true

Case 2:
Input = 2
Expected = false

```

## Notes

My solution, although verbose, is accurate to what the Floyd's Cycle Detection algorithm does. It was complex to get it done, but using a set to validate if a number gets repeated was the key. If it gets repeated, then it would become an infinite loop.

## My solution with comments:

```js
var isHappy = function (n) {
  // converts n to string, then creates an array
  let arr = n.toString().split("");
  let newNum = arr;
  let numSet = new Set();
  do {
    // each element of the array is converted to a number and gets its power of 2
    let newArr = newNum.map((e) => parseInt(e) ** 2);
    // sum to get the new number
    let sum = newArr.reduce((sum, current) => (sum += current), 0);
    // converts it to an array with the new number
    newNum = sum.toString().split("");
    // each new value is added to a set, if it is already in the set and is different from 1, the number will enter an infinite loop, so it returns false. If it is 1, returns true
    if (numSet.has(newNum.join(""))) {
      if (newNum.join("") === "1") {
        return true;
      } else {
        return false;
      }
    }
    numSet.add(newNum.join(""));
  } while (newNum.length > 1 || newNum[0] !== 1);
};
```

## Results

```js
Runtime
63
ms
Beats
31.43%

Memory
51.05
MB
Beats
31.60%

```

## Interesting LeetCode solution:

> by _[GeeksForGeeks](https://www.geeksforgeeks.org/happy-number/)_

```js
function numSquareSum(n) {
  let num = 0;
  while (n !== 0) {
    let digit = n % 10;
    num += digit * digit;
    n = Math.floor(n / 10);
  }
  return num;
}

let st = new Set();
while (1) {
  n = numSquareSum(n);
  if (n == 1) return true;
  if (st.has(n)) return false;
  st.add(n);
}
```

## Notes about the interesting one:

GeeksForGeeks solution is very thorough and it is in fact very accurate to the original Floyd's Cycle Detection algorithm. I read the article but tried to implement my own algorithm.

---
