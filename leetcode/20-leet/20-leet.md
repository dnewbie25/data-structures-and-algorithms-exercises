# 20th -- Smallest Even Multiple

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

```js
Example 1:

Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.
Example 2:

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
```

## Test Examples

```js

Case 1:
n = 5

Case 2:
n = 6

```

## Notes

Easy exercise. I thought it was going to be a bit more complex as it was one of the newest questions.

## My solution with comments:

```js
// uses the modulo operator to determine odd or even numbers
var smallestEvenMultiple = function (n) {
  let i = 1;
  while (true) {
    // uses a loop to find the smallest multiple
    if (i % 2 === 0 && i % n === 0) {
      return i;
    }
    i++;
  }
};
```

## Results

```js
// a good performance, I achieved a time complexity of O(N)
Runtime
45
ms
Beats
88.20%

Memory
48.68
MB
Beats
68.66%

Case 1:
Output
10
Expected
10

Case 2:
Output
6
Expected
6
```

## Interesting LeetCode solution:

> by _[jamauss](https://leetcode.com/problems/smallest-even-multiple/solutions/3053382/typescript-javascript-simple-one-line-solution-with-comments-discussion)_

```js
const smallestEvenMultiple = (n: number): number => {

    return n % 2 == 0 ? n : n * 2;

};
```

## Notes about the interesting one:

A clean one-liner. The code was in Typescript so it is a good example of how to use type declaration for this problem.

---
