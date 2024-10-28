# 52nd -- Unique Number of Occurrences

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

```js
Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
```

## Test Examples

```js
Case 1
arr =
[1,2,2,1,1,3]

Case 2
arr =
[1,2]

Case 3
arr =
[-3,0,1,-3,1,1,1,-3,10,0]
```

## Notes

I was initially going to use `XOR` operator as with the `Leetcode 43rd exercise` I solved previously, but then I found that this approach was more readable.

## My solution with comments:

```js
const uniqueOccurrences = function (arr) {
  // creates a hashmap to count the number of occurrences
  const hashmap = {};
  arr.forEach((e) => (hashmap[e] = hashmap[e] + 1 || 1));
  // if the number of occurrences repeats for any two numbers, the sorted valuesArr will have those numbers next to each other
  const valuesArr = Object.values(hashmap).sort();
  for (let i = 0; i < valuesArr.length - 1; i++) {
    // if they are adjacent, return false
    if (valuesArr[i] === valuesArr[i + 1]) {
      return false;
    }
  }
  return true;
};
```

## Results

```js
Runtime
2
ms
Beats
48.93%

Memory
50.18
MB
Beats
67.03%

```

## Interesting LeetCode solution:

> by _[Mrmagician](hhttps://leetcode.com/problems/unique-number-of-occurrences/solutions/435493/commented-simple-fast-javascript-submission)_

```js
var uniqueOccurrences = function (arr) {
  const obj = {};
  //     Creating hashmap to store count of each number
  arr.forEach((val) => (obj[val] = (obj[val] || 0) + 1));
  //     Creating an array of the count times
  const val = Object.values(obj).sort((a, b) => a - b);
  //     Now, just finding the duplicates
  for (let i = 0; i < val.length - 1; i++) {
    if (val[i] === val[i + 1]) return false;
  }
  return true;
};
```

## Notes about the interesting one:

That solution does the same as mine, I was happy to see that my solution was on point.

---
