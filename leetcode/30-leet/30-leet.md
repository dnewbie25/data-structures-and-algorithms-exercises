# 30th -- Counter II



by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

- `increment()` increases the current value by 1 and then returns it.
- `decrement()` reduces the current value by 1 and then returns it.
- `reset()` sets the current value to init and then returns it.

```js
Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
```


## Test Examples

```js
Case 1
Input
init =
5
calls =
["increment","reset","decrement"]

Case 2
Input
init =
0
calls =
["increment","increment","decrement","reset","reset"]

```


## Notes

Notes here

## My solution with comments:

```js
var createCounter = function(init) {
  let initialValue = init
    return {
      increment: ()=>initialValue+=1,
      decrement: ()=>initialValue-=1,
      reset: ()=>initialValue=init
    }
};

```

## Results

```js
Runtime
45
ms
Beats
98.43%

Memory
52.05
MB
Beats
18.25%

Case 1
Output
[6,5,4]
Expected
[6,5,4]

Case 2
Output
[1,2,1,0,0]
Expected
[1,2,1,0,0]

```

## Interesting LeetCode solution:
> by *[beastfake8](https://leetcode.com/problems/counter-ii/solutions/5855031/easy-to-understand-typescript-code)*

```ts
ype Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let val : number = init;
    return {
        increment : () : number => ++val,
        decrement : () : number => --val,
        reset : () : number => {
            val = init;
            return val;
        }
    }
};
```

## Notes about the interesting one:

This solutions is basically the same as mine but I found it interesting because they used Typescript. It seems like it performed a bit better due to the static typing.
---