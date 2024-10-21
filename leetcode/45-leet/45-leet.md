# 45th -- Calculator with Method Chaining

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

- add - This method adds the given number value to the result and returns the updated Calculator.
- subtract - This method subtracts the given number value from the result and returns the updated Calculator.
- multiply - This method multiplies the result by the given number value and returns the updated Calculator.
- divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
- power - This method raises the result to the power of the given number value and returns the updated Calculator.
  getResult - This method returns the result.
  Solutions within 10-5 of the actual result are considered correct.

```js
Example 1:

Input:
actions = ["Calculator", "add", "subtract", "getResult"],
values = [10, 5, 7]
Output: 8
Explanation:
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
Example 2:

Input:
actions = ["Calculator", "multiply", "power", "getResult"],
values = [2, 5, 2]
Output: 100
Explanation:
new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
Example 3:

Input:
actions = ["Calculator", "divide", "getResult"],
values = [20, 0]
Output: "Division by zero is not allowed"
Explanation:
new Calculator(20).divide(0).getResult() // 20 / 0

The error should be thrown because we cannot divide by zero.
```

## Test Examples

```js
Case 1
Input
actions =
["Calculator", "add", "subtract", "getResult"]
values =
[10, 5, 7]

Case 2
Input
actions =
["Calculator", "multiply", "power", "getResult"]
values =
[2, 5, 2]

Case 3
Input
actions =
["Calculator", "divide", "getResult"]
values =
[20, 0]
```

## Notes

This question was a bit difficult because I didn't realize that I needed to return the whole class instance in each operation in order to chain the methods, but it was a good OOP practice.

## My solution with comments:

```js
class Calculator {
  // except for getResult(), all the other functions return only 'this', which refers to the class itself
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value !== 0) {
      this.result /= value;
      return this;
    } else {
      throw new Error("Division by zero is not allowed");
    }
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = this.result ** value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
```

## Results

```js
Runtime
56
ms
Beats
26.02%

Memory
48.81
MB
Beats
43.46%
```

## Interesting LeetCode solution:

> by _[AlexanderFSP](https://leetcode.com/problems/calculator-with-method-chaining/solutions/3821950/clean-typescript-solution)_

```js
class Calculator {
  constructor(private value : number) {}
    
  add(value : number) : Calculator {
      this.value += value;

      return this;
  }
    
  subtract(value : number) : Calculator {
      this.value -= value;

      return this;
  }
    
  multiply(value : number) : Calculator {
      this.value *= value;

      return this;
  }

  divide(value : number) : Calculator {
      if (!value) {
          throw new Error('Division by zero is not allowed');
      }
      
      this.value /= value;

      return this;
  }
    
  power(value : number) : Calculator {
      this.value **= value;

      return this;
  }

  getResult() : number {
      return this.value;
  }
}
```

## Notes about the interesting one:

This was one of those questions that only had one solution, because the trick was in returning the class instance itself, but I liked that solution using Typescript, it looks very elegant.

---
