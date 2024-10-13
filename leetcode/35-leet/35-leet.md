# 35th -- Sleep





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
```js
Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
```


## Test Examples

```js

Case 1
millis = 100

Case 2
millis = 200

```


## Notes

This one was a good question to practice Promises a bit more.

## My solution with comments:

```js
async function sleep(millis) {
  // returns a Promise that resolves at the specified time
    return new Promise((resolve)=>{
        setTimeout(resolve,millis)
    })
}
```


## Results

```js

Runtime
48
ms
Beats
80.00%

Memory
48.32
MB
Beats
89.50%

Case 1
Output
100
Expected
101

Case 2
Output
200
Expected
200
```

## Interesting LeetCode solution:
> by *[Cosmic_Phantom](https://leetcode.com/problems/sleep/solutions/3525419/promise-examples-dry-run-usecase-o-1-js-ts-beginner-friendly-day11)*

```js
async function sleep(millis) {
  return new Promise(delayresolve => setTimeout(delayresolve, millis));
}
```

## Notes about the interesting one:

This one was similar to mine. They were askng for a Promise that resolved at the specified time, so nothing important had to take place inside the Promise, as long as the `setTimeout()` was set up correctly.

---