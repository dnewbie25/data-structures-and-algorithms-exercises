# 42nd -- LeetCode question name





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
```js
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

```


## Test Examples

```js

Case 1
digits =
[1,2,3]


Case 2
digits =
[4,3,2,1]


Case 3
digits =
[9]

```


## Notes

This question required to handle BigInt numbers. It was a good practice question for that as we don't usually work with such large numbers. This question is my first question achieving `100%` runtime efficiency.

## My solution with comments:

```js
var plusOne = function(digits) {
  let num = digits.join('')
  // makes the operation using BigInt, adding 1n to add 1 to BigInt 
  let big = BigInt(num) + 1n
  // returns the array with each element parsed as an integer
  return big.toString().split('').map(e=>parseInt(e))
};
```


## Results

```js
Runtime
0
ms
Beats
100.00%

Memory
49.12
MB
Beats
18.07%

```

## Interesting LeetCode solution:
> by *[niits](https://leetcode.com/problems/plus-one/solutions/5564037/video-iterate-through-the-array-from-the-end)*

```js
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }    
};
```

## Notes about the interesting one:

I think this one is interesting as it is using a lop to handle the operation. That in order to avoid working with `BigInt` numbers.

---