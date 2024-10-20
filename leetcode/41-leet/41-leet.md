# 41st -- Array Wrapper





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

- When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
- When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

```js
Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"
Example 3:

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0
```


## Test Examples

```js

Case 1
Input
nums =
[[1,2],[3,4]]
operation =
"Add"


Case 2
Input
nums =
[[23,98,42,70]]
operation =
"String"

Case 3
Input
nums =
[[],[]]
operation =
"Add"
```


## Notes

This exercise was difficult for me. I had to review about the OOP in Javascript and see other solutions to understand what should I do.

## My solution with comments:

```js
// assigns the nums array as the constructor array
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

// returns the sum of the array elements
ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((a, b) => a + b, 0);
}

// returns the elements in string format
ArrayWrapper.prototype.toString = function() {
  return '[' + this.nums.toString() + ']';
}

```


## Results

```js
Runtime
61
ms
Beats
14.95%

Memory
50.62
MB
Beats
21.95%
```

## Interesting LeetCode solution:
> by *[TheGElCOgecko](https://leetcode.com/problems/array-wrapper/solutions/3569540/full-thorough-explanation-o-1-time-for-valueof-and-tostring-funcs)*

```js
// Store sum and string in ArrayWrapper
// That way, if we call sum or string multiple times, it's only calculated once!
var ArrayWrapper = function(nums) {
    this.sum = nums.reduce((acc, cur) => acc + cur, 0);
    this.string = JSON.stringify(nums);
};

// Since sum is stored in the object, O(1) time
ArrayWrapper.prototype.valueOf = function() {
    return this.sum;
}

// Since string is stored in the object, O(1) time
ArrayWrapper.prototype.toString = function() {
    return this.string;
}
```

## Notes about the interesting one:

I wouldn't have solved the question without reading the explanation. I was very confussed about modifying the constructor in Javascript.

---