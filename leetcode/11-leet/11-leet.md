# 11th -- Longest Common Prefix





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

```js
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

```


## Test Examples

```js

Case 1:
strs = ["flower","flow","flight"]

Case 2:
strs = ["dog","racecar","car"]

```


## Notes

This one was kind of difficult to solve. I initially thought I needed to check all words, but it actually only cares for the preffix common to ALL words in the array. So by evaluating the first and last element, you could immeaditely check the more common preffix.

## My solution with comments:

```js
var longestCommonPrefix = function (strs) {
  // creates an empry array, sorts the strs array alphabetically and get the first and last element
  let answer = "";
  const sortedArray = strs.sort();
  const firstEl = sortedArray[0]
  const lastEl = sortedArray[sortedArray.length - 1]
  // get the length of whichever element is the largest
  const maxLength = firstEl.length > lastEl.length ? firstEl.length : lastEl.length;
  // checks if the i-th letter for each element is the same, if it is, add it to 'answer', otherwise the preffix search is done, return 'answer' immediately
  for (let i = 0; i < maxLength; i++) {
    if (firstEl[i]!==lastEl[i]){
      return answer
    }
    answer += firstEl[i]
  }
  return answer
};

```


## Results

```js

Runtime
51
ms
Beats
77.30%

Memory
49.32
MB
Beats
55.81%

Case 1:
Output
"fl"
Expected
"fl"

Case 2:
Output
""
Expected
""

```

## Interesting LeetCode solution:
> by *[abdullayev_akbar](https://leetcode.com/problems/longest-common-prefix/solutions/3273176/python3-c-java-19-ms-beats-99-91)*

```py
class Solution:
    def longestCommonPrefix(self, v: List[str]) -> str:
        ans=""
        v=sorted(v)
        first=v[0]
        last=v[-1]
        for i in range(min(len(first),len(last))):
            if(first[i]!=last[i]):
                return ans
            ans+=first[i]
        return ans 

```

## Notes about the interesting one:

Their answer was in Python, but upon reviewing it, it is the same logic that I had, although theirs is more clean and somehow it beat 99.91% of other submissions.

---