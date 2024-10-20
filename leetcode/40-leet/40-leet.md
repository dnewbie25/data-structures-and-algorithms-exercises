# 40th -- Sort By





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

```js
Example 1:

Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
Example 2:

Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
Example 3:

Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1. 
```


## Test Examples

```js

Case 1
arr =
[5,4,1,2,3]
fn =
(x) => x


Case 2
arr =
[{"x":1},{"x": 0},{"x": -1}]
fn =
(x) => x.x


Case 3
arr =
[[3,4],[5,2],[10,1]]
fn =
(x) => x[1]

```


## Notes

This question was a good way to practice callback functions as well as the `Array.prototype.sort()`.

## My solution with comments:

```js
var sortBy = function(arr, fn) {
  // if the result is negative, then b comes before a, otherwise a should be first
    return arr.sort((a,b)=> fn(a)-fn(b))
};
```


## Results

```js

Runtime
120
ms
Beats
82.16%

Memory
65.89
MB
Beats
56.12%

```

## Interesting LeetCode solution:
> by *[TheGElCOgecko](https://leetcode.com/problems/sort-by/solutions/3624653/1-line-full-thorough-explanation-bread)*

```js
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
```

## Notes about the interesting one:

The solution is the same as mine. This question was basically answered in one way, but the explanation is the reason I chose it.

---