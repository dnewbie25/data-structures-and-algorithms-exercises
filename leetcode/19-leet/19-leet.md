# 19th -- Array Prototype Last





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Write code that enhances all arrays such that you can call the `array.last()` method on any array and it will return the last element. If there are no elements in the array, it should return `-1`.

You may assume the array is the output of `JSON.parse`.

```js
Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.

```


## Test Examples

```js

Case 1:
nums = [null, {}, 3]

Case 2:
nums = []

```


## Notes

An interesting exercise to practice how the prototypes work and how you can redefine their functions. I had to revisit how the prototype functions could be modified.

## My solution with comments:

```js
Array.prototype.last = function() {
  // I use 'this' to reference to the array itself
    if(this.length===0){
        return -1
    }
    return this[this.length-1]
};

```


## Results

```js

Runtime
52
ms
Beats
43.77%

Memory
48.89
MB
Beats
32.98%

Case 1:
Output
3
Expected
3

Case 2:
Output
-1
Expected
-1
```

## Interesting LeetCode solution:
> by *[PesivadiyaRutvik](https://leetcode.com/problems/array-prototype-last/solutions/3407591/100-beat-runtime-and-memory-straightforward)*

```js

Array.prototype.last = function() {
    return this[this.length - 1] ?? -1;
};
```

## Notes about the interesting one:

It works the same but by using the ternary operator it simplified the code a lot.

---