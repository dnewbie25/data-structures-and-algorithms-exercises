# 56th -- LeetCode question name

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Explanation here

```js
//code snippets here
```

## Test Examples

```js
Case 1
Input
nums =
[-1,0,1,2,-1,-4]

Case 2
Input
nums =
[0,1,1]

Case 3
Input
nums =
[0,0,0]
```

## Notes

This question beat me. I had to check for others' submissions until I found one that explain the problem and the solution ver well.

## My solution with comments:

```js
const threeSum = function (nums) {
  const arr = []; // Array to store the resulting triplets
  nums.sort((a, b) => a - b); // Sort the array numerically

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates to avoid repeated triplets

    let left = i + 1; // Left pointer starts just after the current element
    let right = nums.length - 1; // Right pointer starts at the end of the array

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // Calculate the sum of the current triplet

      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]]); // If the sum is zero, add the triplet to the result array
        while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates for the left pointer
        while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates for the right pointer
        left++; // Move the left pointer to the right
        right--; // Move the right pointer to the left
      } else if (sum < 0) {
        left++; // If the sum is less than zero, move the left pointer to increase the sum
      } else {
        right--; // If the sum is greater than zero, move the right pointer to decrease the sum
      }
    }
  }
  return arr; // Return the array of triplets that sum to zero
};
```

## Results

```js

Runtime
40
ms
Beats
44.42%

Memory
64.92
MB
Beats
82.57%

```

## Interesting LeetCode solution:

> by _[niits](https://leetcode.com/problems/3sum/solutions/5055810/video-two-pointer-solution)_

```js
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];

      if (total > 0) {
        k--;
      } else if (total < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }
  return res;
};
```

## Notes about the interesting one:

This person had a perfect solution. Once again, the `Two Pointers` topic comes into play, which is a topic covered by the Udemy course I am doing, but haven't get to that part yet.
[JavaScript Unit Testing - The Practical Guide](https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/)

---
