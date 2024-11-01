# 55th -- Memoize

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

- `sum` accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
- `fib` accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
- `factorial` accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) \* n otherwise.

```js
Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
Example 2:

Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
Example 3:

Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
Explanation:
fib(5) = 8 // "call"
// "getCallCount" - total call count: 1
```

## Test Examples

```js
Case 1
Input
fnName =
"sum"
actions =
["call","call","getCallCount","call","getCallCount"]
values =
[[2,2],[2,2],[],[1,2],[]]

Case 2
Input
fnName =
"factorial"
actions =
["call","call","call","getCallCount","call","getCallCount"]
values =
[[2],[3],[2],[],[3],[]]

Case 3
Input
fnName =
"fib"
actions =
["call","getCallCount"]
values =
[[5],[]]
```

## Notes

Honestly, at first I read "memorize", so I thought it was about saving values. But in fact, `memoize` is a function that can remember previous executions if the same arguments are passed, this to improve performance as it will have the actual result already saved so it doesn't have to recalculate everything again. If the input was previously used, then the program already has an answer.

I needed to check a lot of sites in order to solve this question. I was unable to do it on my own.

## My solution with comments:

```js
function memoize(fn) {
  // Create a cache to store results of previous function calls
  const cache = new Map();
  // Variable to keep track of how many times the original function is called
  let callCount = 0;

  // Function to generate a unique key for each set of arguments
  function getKey(args) {
    return JSON.stringify(args);
  }

  // The memoized version of the original function
  const memoizedFn = (...args) => {
    // Generate a key based on the arguments
    const key = getKey(args);
    // Check if the result for these arguments is already in the cache
    if (!cache.has(key)) {
      // If not, increment the call count and store the result in the cache
      callCount++;
      cache.set(key, fn(...args));
    }
    // Return the cached result
    return cache.get(key);
  };

  // Add a method to get the number of times the original function was called
  memoizedFn.getCallCount = () => callCount;
  return memoizedFn;
}
```

## Results

```js
Runtime
275
ms
Beats
88.05%

Memory
92.01
MB
Beats
5.31%
```

## Interesting LeetCode solution:

> by _[explainthis.io](https://www.explainthis.io/en/swe/memoize-function)_

```js
function memoize(fn) {
  const cache = {}; // Our 'memory' - a simple JavaScript object

  return function (...args) {
    // The inner function that does the magic
    const key = String(args); // Creates a unique key from the arguments

    if (key in cache) {
      // Have we seen this input before?
      return cache[key]; // Yes! Return the stored result
    }

    const result = fn(...args); // No? Call the original function
    cache[key] = result; // Store the result for next time
    return result; // Return the calculated result
  };
}
```

## Notes about the interesting one:

I found that site and the explanation was very good. It really helped me solve the problem, but the actual concept of `memoization` is still very fuzzy for me. It is very advanced at this stage.

---
