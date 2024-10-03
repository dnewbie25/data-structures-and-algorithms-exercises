# 26th -- Valid Palindrome





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
```js
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```


## Test Examples

```js

Case 1
s = "A man, a plan, a canal: Panama"

Case 2
s = "race a car"

Case 3
s = " "
```


## Notes

A very fun exercise to practice RegExp and the `localeCompare()` function to compare strings. If `0`, then they are equivalent.

## My solution with comments:

```js
var isPalindrome = function(s) {
  // rmeoves any character excep the letters and numbers
  const newString = s.toLowerCase().replace(/[^a-z0-9]/gi,'')
  // compare if the strings are palindromes
  return newString.localeCompare(newString.split('').reverse().join('')) === 0
};

```


## Results

```js
Runtime
82
ms
Beats
8.03%

Memory
55.66
MB
Beats
20.47%

Case 1
Output
true
Expected
true

Case 2
Output
false
Expected
false

Case 3
Output
true
Expected
true
```

## Interesting LeetCode solution:
> by *[i-love-typescript](https://leetcode.com/problems/valid-palindrome/solutions/554098/simple-javascript-soluton)*

```js
const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}
```

## Notes about the interesting one:

They also used RegExp to solve the problem by removing all non-alphanumeric characters, but used another approach to compare the resulting strings.

---