# 61st -- Valid Parentheses

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

```js
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true
```

## Test Examples

```js
Case 1
Input
s =
"()"

Case 2
Input
s =
"()[]{}"

Case 3
Input
s =
"(]"

Case 4
Input
s =
"([])"

```

## Notes

This was not complex in the way of an advanced topic, but the way to handle the inner parentheses was difficult. I had to peek at others' solutions.

## My solution with comments:

```js
var isValid = function (s) {
  const stack = []; // Stack to keep track of opening brackets
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  }; // Mapping of closing to opening brackets

  for (let char of s) {
    // If the character is a closing bracket
    if (char in mapping) {
      // Pop the top element from the stack if it's not empty, otherwise use a placeholder
      const topElement = stack.length > 0 ? stack.pop() : "#";
      // If the popped element doesn't match the corresponding opening bracket, return false
      if (topElement !== mapping[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
};
```

## Results

```js
Runtime
5
ms
Beats
37.25%

Memory
51.89
MB
Beats
19.18%
```

## Interesting LeetCode solution:

> by _[niits](https://leetcode.com/problems/valid-parentheses/solutions/5139933/video-2-ways-to-solve-this-question)_

```js
var isValid = function (s) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const c of s) {
    if (Object.values(mapping).includes(c)) {
      stack.push(c);
    } else if (mapping.hasOwnProperty(c)) {
      if (!stack.length || mapping[c] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
```

## Notes about the interesting one:

I loved the readability of their code and the thorough explanation.

---
