# 36th -- Timeout Cancellation

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

> setTimeout(cancelFn, cancelTimeMs)

Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

```js
Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]
Explanation:
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
Example 2:

Input: fn = (x) => x**2, args = [2], t = 100
Output: []
Explanation:
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x**2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
Example 3:

Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
Output: [{"time": 30, "returned": 8}]
Explanation:
const cancelTimeMs = 100;
const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.
```

## Test Examples

```js
Case 1
Input
fn =
(x) => x * 5
args =
[2]
t =
20
cancelTimeMs =
50

Case 2
Input
fn =
(x) => x**2
args =
[2]
t =
100
cancelTimeMs =
50

Case 3
Input
fn =
(x1, x2) => x1 * x2
args =
[2,4]
t =
30
cancelTimeMs =
100
```

## Notes

This question was very confussing. After reading the discussion section I saw that the question was really asking for the execution of `fn` and then have a function cancelling its `setTimeout` in the same function, but that cancel function is the one that should be returned. That because if you decide to execute another function, you can then call `cancellable` and cancel the queued `fn` function.

## My solution with comments:

```js
var cancellable = function (fn, args, t) {
  // it creates a variable that corresponds to the function fn executed after t milliseconds. timerSetUp is a time identifier
  let timerSetUp = setTimeout(() => {
    fn(...args);
  }, t);

  // it returns a function that is cancelling the execution of the setTimeout defined above if you want to execute another function first
  return function () {
    clearTimeout(timerSetUp);
  };
};
```

## Results

```js
Runtime
70
ms
Beats
30.44%

Memory
49.46
MB
Beats
61.62%

Case 1
Output
[{"time":21,"returned":10}]
Expected
[{"time":20,"returned":10}]

Case 2
Output
[]
Expected
[]

Case 3
Output
[{"time":30,"returned":8}]
Expected
[{"time":30,"returned":8}]
```

## Interesting LeetCode solution:

> by _[Sarah-2002](https://leetcode.com/problems/timeout-cancellation/solutions/3725241/full-explanation-unlike-any-others)_

```js
const cancellable = function (fn, args, t) {
  // cancelFn function//
  const cancelFn = function () {
    clearTimeout(timer);
  };
  const timer = setTimeout(() => {
    fn(...args);
  }, t);
  return cancelFn;
};
```

## Notes about the interesting one:

She provided a full explanation of what this question was really asking about.

---
