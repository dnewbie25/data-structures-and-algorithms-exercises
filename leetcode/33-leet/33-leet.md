# 33th -- Add Two Promises





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

```js
Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

```


## Test Examples

```js

Case 1
Input
promise1 =
new Promise(resolve => setTimeout(() => resolve(2), 20))
promise2 =
new Promise(resolve => setTimeout(() => resolve(5), 60))

Case 2
Input
promise1 =
new Promise(resolve => setTimeout(() => resolve(10), 50))
promise2 =
new Promise(resolve => setTimeout(() => resolve(-12), 30))

```


## Notes

I choose this question because I think it was a good way to improve promises handling, as I feel the subject is quite complicated sometimes.

## My solution with comments:

```js
var addTwoPromises = async function(promise1, promise2) {
  // although in the console this is still returning a promise, it seems like this was the valid output
  let n1 = await promise1
  let n2 = await promise2
  return n1+n2
};

```


## Results

```js
Runtime
63
ms
Beats
56.01%

Memory
49.82
MB
Beats
14.19%

Case 1
Output
7
Expected
7

Case 2
Output
-2
Expected
-2

```

## Interesting LeetCode solution:
> by *[Vikas-Pathak-123](https://leetcode.com/problems/add-two-promises/solutions/3698863/easy-solution-2723-add-two-promises-level-up-your-js-skills)*

```js
var addTwoPromises = async function(promise1, promise2) {
  // Wait for both promises to resolve and retrieve their values
  const [value1, value2] = await Promise.all([promise1, promise2]);

  // Return a new promise that resolves with the sum of the values
  return value1 + value2;
};
```

## Notes about the interesting one:

I didn't know about the `Promise.all` function. It basically waits until every promise has been resolved and then you can return the sum with using each passed variable to store the values.

---