# 58th -- Cache With Time Limit

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

```js
Example 1:

Input:
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]
Output: [null, false, 42, 1, -1]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
At t=50, key=1 is requested and the value of 42 is returned.
At t=50, count() is called and there is one active key in the cache.
At t=100, key=1 expires.
At t=150, get(1) is called but -1 is returned because the cache is empty.
Example 2:

Input:
actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
timeDelays = [0, 0, 40, 50, 120, 200, 250]
Output: [null, false, true, 50, 50, -1, 0]
Explanation:
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
At t=50, get(1) is called which returned 50.
At t=120, get(1) is called which returned 50.
At t=140, key=1 expires.
At t=200, get(1) is called but the cache is empty so -1 is returned.
At t=250, count() returns 0 because the cache is empty.
```

## Test Examples

```js
Case 1
actions =
["TimeLimitedCache", "set", "get", "count", "get"]
values =
[[], [1, 42, 100], [1], [], [1]]


Case 2
actions =
["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
values =
[[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]

```

## Notes

I was not able to solve this question my own, I needed to check videos about this problem and see the whole solution in `explainthis.io`.

## My solution with comments:

```js
//My code here
```

## Results

```js
Runtime
67
ms
Beats
10.09%

Memory
48.52
MB
Beats
87.37%

```

## Interesting LeetCode solution:

> by _[explainthis.io](https://www.explainthis.io/en/swe/cache-with-time-limit)_

```js
var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const found = this.cache.has(key);
  if (found) {
    clearTimeout(this.cache.get(key).timerId);
  }
  this.cache.set(key, {
    value,
    timerId: setTimeout(() => this.cache.delete(key), duration),
  });
  return found;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
```

## Notes about the interesting one:

That solution helped me solve the problem, as I needed to use `setTimeout` to remove the items from the cache class.

---
