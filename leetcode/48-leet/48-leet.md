# 48th -- Reverse Words in a String





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
```js
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```


## Test Examples

```js
Case 1
s =
"the sky is blue"

Case 2
s =
"  hello world  "

Case 3
s =
"a good   example"
```


## Notes

I was planning on using loops, but keeping in mind previous solutions and recommendations I decided to solve it using `RegEx`.

## My solution with comments:

```js
var reverseWords = function(s) {
  // using a regular expression to match only the non-whitespace characters and then reversing the array to return the string
  return s.match(/\w+/gi).reverse().join(' ')
};
```


## Results

```js
Runtime
1
ms
Beats
99.14%

Memory
51.34
MB
Beats
22.12%
```

## Interesting LeetCode solution:
> by *[somebody](https://leetcode.com/problems/reverse-words-in-a-string/solutions/5869752/video-2-solutions-bonus-reversed-iteration-and-two-pointers)*

```js
var reverseWords = function(s) {
    return s.split(' ').filter(word => word.length > 0).reverse().join(' ');
};
```

## Notes about the interesting one:

A very clever solution. By splitting using `whitespaces` as the separator, every whitespace will have a `length of 0`, so every other element with `size > 0` is a `word`. Then just reverse the array and join it.

---