# 23th -- Concatenation of Array





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

```js
Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

```


## Test Examples

```js

Case 1
Input
nums =
[1,2,1]


Case 2
Input
nums =
[1,3,2,1]

```


## Notes

A good way to practice array destructuring

## My solution with comments:

```js

var getConcatenation = function(nums) {
  // destructuring the array twice
    return [...nums,...nums]
};

```


## Results

```js

Runtime
72
ms
Beats
22.57%

Memory
53.14
MB
Beats
7.05%

Case 1
Output
[1,2,1,1,2,1]
Expected
[1,2,1,1,2,1]

Case 2
Output
[1,3,2,1,1,3,2,1]
Expected
[1,3,2,1,1,3,2,1]

```

## Interesting LeetCode solution:
> by *[TheCoderNextDoor](https://leetcode.com/problems/concatenation-of-array/solutions/2655608/easy-javascript-soln)*

```js
var getConcatenation = function(nums) {
    const result = [];
    for(let i= 0;  i< nums.length; i++) {
        result[i] = nums[i];
        result [i + nums.length] = nums[i]
    }
    return result;
};

```

## Notes about the interesting one:

This solution was the only one I found that did not use destructuring. It seems that using a loop is faster in terms of computing power.

---