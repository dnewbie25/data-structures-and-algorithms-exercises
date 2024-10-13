# 37th -- Interval Cancellation





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

> setTimeout(cancelFn, cancelTimeMs)

The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

```js
Example 1:

Input: fn = (x) => x * 2, args = [4], t = 35
Output: 
[
   {"time": 0, "returned": 8},
   {"time": 35, "returned": 8},
   {"time": 70, "returned": 8},
   {"time": 105, "returned": 8},
   {"time": 140, "returned": 8},
   {"time": 175, "returned": 8}
]
Explanation: 
const cancelTimeMs = 190;
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);

Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
1st fn call is at 0ms. fn(4) returns 8.
2nd fn call is at 35ms. fn(4) returns 8.
3rd fn call is at 70ms. fn(4) returns 8.
4th fn call is at 105ms. fn(4) returns 8.
5th fn call is at 140ms. fn(4) returns 8.
6th fn call is at 175ms. fn(4) returns 8.
Cancelled at 190ms
Example 2:

Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30
Output: 
[
   {"time": 0, "returned": 10},
   {"time": 30, "returned": 10},
   {"time": 60, "returned": 10},
   {"time": 90, "returned": 10},
   {"time": 120, "returned": 10},
   {"time": 150, "returned": 10}
]
Explanation: 
const cancelTimeMs = 165; 
const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30) 
setTimeout(cancelFn, cancelTimeMs)

Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
1st fn call is at 0ms 
2nd fn call is at 30ms 
3rd fn call is at 60ms 
4th fn call is at 90ms 
5th fn call is at 120ms 
6th fn call is at 150ms
Cancelled at 165ms
Example 3:

Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
Output: 
[
   {"time": 0, "returned": 9},
   {"time": 50, "returned": 9},
   {"time": 100, "returned": 9},
   {"time": 150, "returned": 9}
]
Explanation: 
const cancelTimeMs = 180;
const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
setTimeout(cancelFn, cancelTimeMs)

Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled. 
1st fn call is at 0ms
2nd fn call is at 50ms
3rd fn call is at 100ms
4th fn call is at 150ms
Cancelled at 180ms
```


## Test Examples

```js
Case 1
fn =
(x) => x * 2
args =
[4]
t =
35
cancelTimeMs =
190

Case 2
fn =
(x1, x2) => (x1 * x2)
args =
[2,5]
t =
30
cancelTimeMs =
165

Case 3
fn =
(x1, x2, x3) => (x1 + x2 + x3)
args =
[5,1,3]
t =
50
cancelTimeMs =
180
```


## Notes

This question was very hard to understand at first. I had to read the discussion forum and then I was able to solve it. What thet asked was to have an interval that called the `fn` function every `t` milliseconds. The return must be a function that has a `clearInterval` in it.

## My solution with comments:

```js
var cancellable = function(fn, args, t) {
  // must call fn at the start
  fn(...args)
  // must create an interval to call fn every t milliseconds
  const interval = setInterval(()=>fn(...args),t)
  // a function cancelFn that cancels the interval must be created
  function cancelFn(){
    clearInterval(interval)
  }
  // return the cancelFn, here we are doing a closure
  return cancelFn
};

```


## Results

```js
Runtime
77
ms
Beats
8.51%

Memory
49.40
MB
Beats
65.09%

Case 1
Output
[{"time":0,"returned":8},{"time":35,"returned":8},{"time":70,"returned":8},{"time":105,"returned":8},{"time":140,"returned":8},{"time":175,"returned":8}]
Expected
[{"time":0,"returned":8},{"time":35,"returned":8},{"time":71,"returned":8},{"time":106,"returned":8},{"time":141,"returned":8},{"time":176,"returned":8}]

Case 2
Output
[{"time":0,"returned":10},{"time":30,"returned":10},{"time":60,"returned":10},{"time":90,"returned":10},{"time":120,"returned":10},{"time":151,"returned":10}]
Expected
[{"time":0,"returned":10},{"time":30,"returned":10},{"time":60,"returned":10},{"time":90,"returned":10},{"time":120,"returned":10},{"time":150,"returned":10}]

Case 3
Output
[{"time":0,"returned":9},{"time":50,"returned":9},{"time":100,"returned":9},{"time":150,"returned":9}]
Expected
[{"time":0,"returned":9},{"time":50,"returned":9},{"time":100,"returned":9},{"time":150,"returned":9}]
```

## Interesting LeetCode solution:
> by *[Arghadeep23](https://leetcode.com/problems/interval-cancellation/solutions/5173752/better-understanding-of-question-code)*

```js
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args); // first call 
    const intervalID = setInterval(()=>{fn(...args)},t); // calls after t time interval
    return function() // closure
    {
        clearInterval(intervalID);
    }
};
```

## Notes about the interesting one:

I read his explanation of the problem and then I was able to solve it. The way he explained it was very clear and I proved my solution was correct when I checked that both of our codes are similar. He explained that we needed to create a `closure` to solve it, so I had to do a small research about it.

---