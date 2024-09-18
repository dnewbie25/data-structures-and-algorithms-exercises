# 17th -- Find the Index of the First Occurrence in a String





by *[dnebwie25](https://leetcode.com/u/dnebwie25/)*


## Task

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

```js
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```


## Test Examples

```js

Case 1:
Input
haystack =
"sadbutsad"
needle =
"sad"

Case 2:
Input
haystack =
"leetcode"
needle =
"leeto"

```


## Notes

Good exercise to practice strings built-in functions.

## My solution with comments:

```js
// this function searches for the first occurrence of the needle in the haystack string
var strStr = function(haystack, needle) {
  const index = haystack.indexOf(needle)
  return index
};

```


## Results

```js

Runtime
52
ms
Beats
59.27%

Memory
49.07
MB
Beats
34.25%

Case 1:
Output
0
Expected
0

Case 2:
Output
-1
Expected
-1
```

## Interesting LeetCode solution:
> by *[niits](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/5349528/video-slicing-approach)*

```js
var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    
    return -1;    
};
```

## Notes about the interesting one:

This solutions uses the `substring()` function in a haystack, using the length of the `needle` as the length of the word to look up for. If the substring found is equal to `needle`, then return the index of the first letter found. Otherwise, returns `-1`.

It was a very good answer without using built-in functions (except for `substring()`) 

---