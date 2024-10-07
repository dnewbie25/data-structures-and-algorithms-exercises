# 31st -- Array Reduce Transformation





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

```js
Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.

```


## Test Examples

```js

Case 1
Input
nums =
[1,2,3,4]
fn =
function sum(accum, curr) { return accum + curr; }
init =
0

Case 2
Input
nums =
[1,2,3,4]
fn =
function sum(accum, curr) { return accum + curr * curr; }
init =
100

Case 3
Input
nums =
[]
fn =
function sum(accum, curr) { return 0; }
init =
25

```


## Notes

I was getting a lot of troubles because I am not used to use the `reduce` function. I had to read the MDN documentation to understand how it worked.

## My solution with comments:

```js
var reduce = function(nums, fn, init) {
  // the return of fn is what is going to be added to the accumulator, so I just had to call 
  // fn(acc,curr)
    return nums.reduce((acc, curr)=>fn(acc,curr), init)
};
```


## Results

```js

Runtime
59
ms
Beats
26.72%

Memory
48.67
MB
Beats
94.60%

Case 1
Output
10
Expected
10

Case 2
Output
130
Expected
130

Case 3
Output
25
Expected
25

```

## Interesting LeetCode solution:
> by *[vermaamanmr](https://leetcode.com/problems/array-reduce-transformation/solutions/3506475/5-diff-method-solution-in-typescript-and-js-learn-js-with-question-day-6)*

```js
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
```

## Notes about the interesting one:

The interesting thing here is that they used a for loop. I was focused on trying to solve it by using the reduce function, but that's on me. Their solution is simple and readable.

---