# 34th -- Reverse Integer

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given a signed `32-bit` integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return 0.

```js
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

```

## Test Examples

```js
Case 1
Input
x =
123

Case 2
Input
x =
-123

Case 3
Input
x =
120

```

## Notes

This one was a good challenge to review the data types definition and to check if a number is actually a 32-bit sized number or not.

## My solution with comments:

```js
var reverse = function (x) {
  // define the min and max values of a 32-bit integer
  const min = -(2 ** 31);
  const max = 2 ** 31 - 1;
  if (x > max || x < min) {
    return 0;
  }
  // creates a string of the number
  let str = x.toString().split("");
  let value = 0;
  if (x < 0) {
    value = parseInt(str[0] + str.slice(1, str.length).reverse().join(""));
  } else {
    value = parseInt(str.reverse().join(""));
  }
  // check if the reversed value is still a 32-bit number
  if (value > max || value < min) {
    return 0;
  }
  return value;
};
```

## Results

```js

Runtime
73
ms
Beats
60.75%

Memory
52.72
MB
Beats
58.58%

Case 1
Output
321
Expected
321

Case 2
Output
-321
Expected
-321

Case 3
Output
21
Expected
21
```

## Interesting LeetCode solution:

> by _[somebody](https://leetcode.com/problems/reverse-integer/solutions/5428589/video-using-remainder)_

```js
var reverse = function (x) {
  let res = 0;
  if (x < 0) {
    res = parseInt(String(x).slice(1).split("").reverse().join("")) * -1;
  } else {
    res = parseInt(String(x).split("").reverse().join(""));
  }

  if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
    return 0;
  }

  return res;
};
```

## Notes about the interesting one:

It works the same as mine, although they used the definition using exponentiation

---
