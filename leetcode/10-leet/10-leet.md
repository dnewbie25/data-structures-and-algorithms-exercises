# 10th -- Length of Last Word





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

```js
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

```


## Test Examples

```js

Case 1:
s = "Hello World"

Case 2:
s = "   fly me   to   the moon  "

Case 3:
s = "luffy is still joyboy"


```


## Notes

This one was a good challenge to solve with the help of [regex101](https://regex101.com)

## My solution with comments:

```js
var lengthOfLastWord = function(s) {
  // create a RegEx that matches any group of characters (ignore whitespaces)
  const regex = /(\w+)/gi
  const arr = s.match(regex)
  // returns the length of the last element of the matched strings
  return arr[arr.length-1].length
};

```


## Results

```js

Runtime
56
ms
Beats
29.44%

Memory
48.61
MB
Beats
77.05%

Case 1:
Output = 5
Expected = 5

Case 2:
Output = 4
Expected = 4

Case 3:
Output = 6
Expected = 6
```

## Interesting LeetCode solution:
> by *[MrAke](https://leetcode.com/problems/length-of-last-word/solutions/4954087/97-43-easy-solution-with-explanation)*

```js
var lengthOfLastWord = function(s) {
    s = s.trim();
    
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        }
        else if (length > 0) {
            break;
        }
    }
    
    return length;
};

```

## Notes about the interesting one:

Interestingly, RegEx uses more resources. In this case, even though the code is larger and has more conditions, it runs faster than mine, although I would argue that mine can be a bit more easy to read.

---