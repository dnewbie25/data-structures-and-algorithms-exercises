# 18th -- Score of a String





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

```py
Example 1:

Input: s = "hello"

Output: 13

Explanation:

The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

Example 2:

Input: s = "zaz"

Output: 50

Explanation:

The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

```


## Test Examples

```py

Case 1:
s = 'hello'

Case 2:
s = 'zaz'

```


## Notes

This challenge was a good way to learn and practice a function you don't see very often. The `ord()` function helps you getting the ASCII values of each character you pass as an argument.

## My solution with comments:

```py
class Solution:
  '''Casts the input as a list, then loops and gets the absolute value of the difference between the current and the next character. After that, it adds that result to the sum variable'''
    def scoreOfString(self, s: str) -> int:
        arr = list(s)
        sum = 0
        for i in range(len(arr)-1):
            sum += abs(ord(arr[i])-ord(arr[i+1]))
        return sum

```


## Results

```py

Runtime
38
ms
Beats
45.54%

Memory
16.49
MB
Beats
62.07%

Case 1:
Output
13
Expected
13

Case 2:
Output
50
Expected
50

```

## Interesting LeetCode solution:
> by *[hi-malik](https://leetcode.com/problems/score-of-a-string/solutions/5237624/one-line-solution)*

```py
class Solution:
    def scoreOfString(self, s: str) -> int:
        total = 0
        for i in range(len(s) - 1):
            total += abs(ord(s[i]) - ord(s[i + 1]))
        return total

```

## Notes about the interesting one:

That is literally the same solution. Turns out that knowing the `ord()` was the only thing required to pass this question.

---