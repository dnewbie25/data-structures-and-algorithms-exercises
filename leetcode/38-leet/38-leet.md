# 38th -- Is Object Empty

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given an object or an array, return if it is empty.

- An empty object contains no key-value pairs.
- An empty array contains no elements.

You may assume the object or array is the output of JSON.parse.

```js
Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
```

## Test Examples

```js
Case 1
Input
obj =
{"x": 5, "y": 42}

Case 2
Input
obj =
{}

Case 3
Input
obj =
[null, false, 0]
```

## Notes

I solved it by thinking that `Object.keys()` will return an array of the keys if it is an object. Otherwise it will return an array with all the elements if `obj` is an array.

## My solution with comments:

```js
var isEmpty = function (obj) {
  // if the obj is not empty, Object.keys(obj) will have a length greater than zero
  if (Object.keys(obj).length > 0) {
    return false;
  }
  return true;
};
```

## Results

```js

Runtime
47
ms
Beats
81.20%

Memory
49.64
MB
Beats
20.46%

Case 1
Output
false
Expected
false

Case 2
Output
true
Expected
true

Case 3
Output
false
Expected
false
```

## Interesting LeetCode solution:

> by _[VehicleOfPuzzle](https://leetcode.com/problems/is-object-empty/solutions/5722608/more-than-you-ever-wanted-to-know-about-this-topic)_

```js
function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else {
    return JSON.stringify(obj) === "{}";
  }
}
```

## Notes about the interesting one:

The only difference is that it returns an empty JSON, however the exercise only required a `true` or `false`.

---
