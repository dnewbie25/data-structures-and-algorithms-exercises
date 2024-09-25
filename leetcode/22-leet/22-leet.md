# 22th -- Convert the Temperature

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

Return the array ans. Answers within 10-5 of the actual answer will be accepted.

```js
Example 1:

Input: celsius = 36.50
Output: [309.65000,97.70000]
Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
Example 2:

Input: celsius = 122.11
Output: [395.26000,251.79800]
Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.
```

## Test Examples

```js

Case 1:
celsius = 36.50
Case 2:
celsius = 122.11

```

## Notes

Needed to research again for the formulas Kelvin = Celsius + 273.15, Fahrenheit = Celsius \* 1.80 + 32.00. The only thing I don't understand is why my solutions gets a time complexity so bad as if it was using a lot of computing power.

## My solution with comments:

```js
var convertTemperature = function (celsius) {
  // uses the scientific formulas to convert the values
  return [celsius + 273.15, celsius * 1.8 + 32.0];
};
```

## Results

```js
Runtime
55
ms
Beats
33.83%

Memory
48.95
MB
Beats
30.63%

Case 1:
Output
[309.65000,97.70000]
Expected
[309.65000,97.70000]

Case 2:
Output
[395.26000,251.79800]
Expected
[395.26000,251.79800]
```

## Interesting LeetCode solution:

> by _[fahim_ash](https://leetcode.com/problems/convert-the-temperature/solutions/2809884/simple-javascript-typescript-solution-100-faster)_

```js
function convertTemperature(celsius: number): number[] {
    return [273.15 + celsius,1.8 * celsius + 32] 

};
```

## Notes about the interesting one:

The only thing I found intriguing is that my code runs only 33% faster than the mean time. I don't find any other solutions that changes the answer (the answer is very straightforward), but they get better time complexity than mine.

---
