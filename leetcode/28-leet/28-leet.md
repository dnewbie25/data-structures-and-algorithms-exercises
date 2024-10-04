# 28th -- Allow One Function Call





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

- The first time the returned function is called, it should return the same result as fn.
- Every subsequent time it is called, it should return undefined.

```js
Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called

```


## Test Examples

```js
Case 1
Input
fn =
(a,b,c) => (a + b + c)
calls =
[[1,2,3],[2,3,6]]

Case 2
Input
fn =
(a,b,c) => (a * b * c)
calls =
[[5,7,4],[2,3,6],[4,6,8]]
```


## Notes

The question was horribly worded. It took a while to figure out what it was asking. I had to read the comments to get insights of what was required to solve it.

## My solution with comments:

```js
var once = function(fn) {
    // creates a variable to track if the function has been called already
    let functionCalled = false
    let result
    return function(...args){
      // if the function has not been called, then return the array with the arguments destructured
       if(!functionCalled){
        result = fn(...args)
        // update functionCalled to know that the function was run at least once
        functionCalled = true
        return result
       }else{
        // otherwise returns undefined
        return undefined
       }
    }
};

```


## Results

```js

Runtime
53
ms
Beats
50.60%

Memory
49.09
MB
Beats
22.43%

Case 1
Output
[{"calls":1,"value":6}]
Expected
[{"calls":1,"value":6}]

Case 2
Output
[{"calls":1,"value":140}]
Expected
[{"calls":1,"value":140}]
```

## Interesting LeetCode solution:
> by *[vermaamanmr](https://leetcode.com/problems/allow-one-function-call/solutions/3514065/o-1-sc-o-1-tc-4-diff-method-solution-in-js-and-typescript-day-8)*

```js
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {

  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  }

};

let fn = (a,b,c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // undefined

```

## Notes about the interesting one:

This solution has a very clear explanation of what the question was really asking. It was a good inspiration point to figure out the answer.
---
