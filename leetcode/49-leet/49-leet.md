# 49th -- Is Subsequence





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
```js
Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
```


## Test Examples

```js
Case 1
s =
"abc"
t =
"ahbgdc"

Case 2
s =
"axc"
t =
"ahbgdc"
```


## Notes

This question was hard. The solution although I had it solved by almost all cases, it was still failing in the cases where the letters where the same but in different order in the `t` string. The solution required using the concept of `Two Pointers` which I had to read after many failed attempts.

## My solution with comments:

```js
var isSubsequence = function (s, t) {
  // Creates an index from 0 for both strings
  let sIndex = 0
  let tIndex = 0
  // Loops while the indexes are smaller than the length
  while(sIndex<s.length && tIndex<t.length){
    // Only when the current t character is the same as the current s character we increase the index of s
    if(s[sIndex]===t[tIndex]){
      sIndex++
    }
    // t index will increase in any case to keep moving forward with that string
    tIndex++
  }
  // if the sIndex is the same as s.length, then the string found in t is the same
  return sIndex===s.length
};
```


## Results

```js
Runtime
1
ms
Beats
97.77%

Memory
48.85
MB
Beats
77.93%

```

## Interesting LeetCode solution:
> by *[niits](https://leetcode.com/problems/is-subsequence/solutions/5101957/video-two-pointer-solution)*

```js
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        sp = tp = 0

        while sp < len(s) and tp < len(t):
            if s[sp] == t[tp]:
                sp += 1
            tp += 1
        
        return sp == len(s)
```

## Notes about the interesting one:

The solution was in Python. But there I realized that using my approach of create hashtables will not work because the keys are sorted automatically in Javascript, so the case when the characters were the same but in different order would return `true`. Only by using the `Two Pointers` approach I was sable to sort out that problem.

---