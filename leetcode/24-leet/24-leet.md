# 24th -- Sqrt(x)

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x \*\* 0.5 in python.

```js
Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

## Test Examples

```js
Case 1
Input
x =
4

Case 2
Input
x =
8

```

## Notes

The only thing I didn't understand is why my solution was only 52.71% more efficient in memory. Those functions are supposedly very well optimized. After checking other solutions, I was able to see that they used a binary search to get the square root. Binary search is a very fast and optimized algorithm.

## My solution with comments:

```js
var mySqrt = function (x) {
  if (x < 0) {
    return null;
  }
  // return the integer part of the result
  return Math.floor(Math.sqrt(x));
};
```

## Results

```js
57
ms
Beats
98.34%

Memory
52.71
MB
Beats
46.59% good results here

```

## Interesting LeetCode solution:

> by _[hieven](https://leetcode.com/problems/sqrtx/solutions/25167/easy-to-understand-javascript-solution)_

```js
var mySqrt = function (x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
```

## Notes about the interesting one:

This solution uses binary search, making it very efficient with a time complexity of `O(log x)`. It smartly narrows down the range by comparing squares, ensuring it finds the integer square root without needing floating-point arithmetic
---
