# 57th -- Promise Time Limit

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

```js
Example 1:

Input:
fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output

The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
Example 2:

Input:
fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}
inputs = [5]
t = 150
Output: {"resolved":25,"time":100}
Explanation:
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
Example 3:

Input:
fn = async (a, b) => {
  await new Promise(res => setTimeout(res, 120));
  return a + b;
}
inputs = [5,10]
t = 150
Output: {"resolved":15,"time":120}
Explanation:
​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
Example 4:

Input:
fn = async () => {
  throw "Error";
}
inputs = []
t = 1000
Output: {"rejected":"Error","time":0}
Explanation:
The function immediately throws an error.
```

## Test Examples

```js
Case 1
Input
fn =
async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; }
inputs =
[5]
t =
50

Case 2
Input
fn =
async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; }
inputs =
[5]
t =
150

Case 3
Input
fn =
async (a, b) => { await new Promise(res => setTimeout(res, 120)); return a + b; }
inputs =
[5,10]
t =
150

Case 4
Input
fn =
async () => { throw "Error"; }
inputs =
[]
t =
1000
```

## Notes

This function resembles some previous questions I solved that returns a `clearTimeout` function. Although it was a bit more complex to set. I had to read some solutions before understanding how I should write my code to make it work.

## My solution with comments:

```js
const timeLimit = (fn, t) => {
  // Returns a new function that limits the execution time of 'fn'
  return async function (...args) {
    return new Promise((resolve, reject) => {
      // Set a timer to reject the promise if 'fn' exceeds the time limit
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      // Call the original function 'fn' with provided arguments
      fn(...args)
        .then((result) => {
          // Clear the timer if 'fn' resolves within the time limit
          clearTimeout(timer);
          resolve(result);
        })
        .catch((error) => {
          // Clear the timer if 'fn' rejects
          clearTimeout(timer);
          reject(error);
        });
    });
  };
};
```

## Results

```js
Runtime
58
ms
Beats
68.13%

Memory
49.20
MB
Beats
74.66%

```

## Interesting LeetCode solution:

> by _[Cosmic_Phantom](https://leetcode.com/problems/promise-time-limit/solutions/3529233/promise-real-life-example-dry-run-usecase-o-1-js-ts-beginner-friendly-day12)_

```js
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((delayresolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeoutId);
          delayresolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```

## Notes about the interesting one:

I liked that solution because at the end they added a real life example of how a function like this would be used in production.

---
