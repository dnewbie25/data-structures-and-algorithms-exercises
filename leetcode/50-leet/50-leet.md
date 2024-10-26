# 50th -- Convert a Number to Hexadecimal





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

Note: You are not allowed to use any built-in library method to directly solve this problem.
```js
Example 1:

Input: num = 26
Output: "1a"
Example 2:

Input: num = -1
Output: "ffffffff"
```


## Test Examples

```js
Case 1
Input
num =
26

Case 2
Input
num =
-1
```


## Notes

The trick here was that all negative numbers must be converted to a value recognized by the `toString` function. `0xFFFFFFFF + num + 1` is a way to solved this:

- 0xFFFFFFFF represents the maximum value of a 32-bit unsigned integer (which is 4294967295 in decimal).
- Adding num (which is negative) to 0xFFFFFFFF and then adding 1 effectively converts num into its 32-bit unsigned integer equivalent. This is a common way to get the two’s complement representation of a negative number in hexadecimal.

## My solution with comments:

```js
const toHex = function (num) {
  // when a number is negative, is must be converted into a 32-bits representation o
  if (num < 0) {
    const bitNum = 0xFFFFFFFF + num + 1
    return bitNum.toString(16)
  }
  return parseInt(num).toString(16)
}
```


## Results

```js
Runtime
0
ms
Beats
100.00%

Memory
49.11
MB
Beats
8.42%
```

## Interesting LeetCode solution:
> by *[Tod](https://stackoverflow.com/a/697841)*

```js
function decimalToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(16).toUpperCase();
}

console.log(decimalToHexString(27));
console.log(decimalToHexString(48.6));
```

## Notes about the interesting one:

I found the solution in stackoverflow to the issue with negative numbers. That question has a lot of answers but I think the most straightforward solution is the one by Tod.

---