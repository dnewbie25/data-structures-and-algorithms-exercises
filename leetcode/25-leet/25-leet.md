# 25th -- Add Binary





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given two binary strings a and b, return their sum as a binary string.

```js
Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
```


## Test Examples

```js


Case 1
Input
a =
"11"
b =
"1"

Case 2
Input
a =
"1010"
b =
"1011"

Case 3
Input
a =
"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b =
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

```


## Notes

This one was a good exercise to understand more about how to work with binary numbers in Javascript and to know how the '0b' preffix worked. I also learned about `BigInt` because a particular test case used a very large number

## My solution with comments:

```js
var addBinary = function(a, b) {
  // create a BigInt and reads its binary value, then add them up and returns the new binary number
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};
```


## Results

```js

Runtime
52
ms
Beats
78.87%

Memory
49.00
MB
Beats
88.50%

Case 1
Output
"100"
Expected
"100"

Case 2
Output
"10101"
Expected
"10101"

Case 3
Output
"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
Expected
"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"

```

## Interesting LeetCode solution:
> by *[nova2993](https://leetcode.com/problems/add-binary/solutions/1017596/detail-explanation-easy-single-line-97-faster)*

```js
var addBinary = function(a, b) {
    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}

```

## Notes about the interesting one:

The solution is the same as mine. The real issue was that particular test case, where we needed to use `BigInt`

---