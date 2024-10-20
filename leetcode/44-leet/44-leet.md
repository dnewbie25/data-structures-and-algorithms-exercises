# 44th -- Merge Strings Alternately





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

```js
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
```


## Test Examples

```js
Case 1
word1 =
"abc"
word2 =
"pqr"

Case 2
word1 =
"ab"
word2 =
"pqrs"

Case 3
word1 =
"abcd"
word2 =
"pq"

```


## Notes

This question's difficulty was in handling the remaining characters. My solution was basically filling the spaces with empty strings ''. Sometimes undefined elements were created but that was because of using the multiplication by 2. That is why I use a filter at the end.

## My solution with comments:

```js
var mergeAlternately = function(word1, word2) {
  // find the largest word and use that as the reference
  let largest = word1.length > word2.length? word1.length:word2.length
  let arr1 = []
  let arr2 = []
  // for the word1 the order is character, whitespace, character
  for(let i = 0;i<largest;i++){
    if(word1[i]){
      arr1.push(word1[i])
      arr1.push('')
    }else{
      arr1.push('')
    }
  }
  // for the word1 the order is whitespace, character, whitespacec
  for(let i = 0;i<largest;i++){
    if(word2[i]){
      arr2.push('')
      arr2.push(word2[i])
    }else{
      arr2.push('')
    }
  }
  // joins the two arrays by the same index
  let newArr = []
  // multiple largest*2 because each array basically doubles the length of each word by using a character and whitespace in each insertion
  for(let i = 0;i<largest*2;i++){
    newArr.push(arr1[i])
    newArr.push(arr2[i])
  }
  // removes the undefined elements
  newArr = newArr.filter(e=> e!==undefined)
  //returns the string
  return newArr.join('')
};

```


## Results

```js
Runtime
58
ms
Beats
32.12%

Memory
52.84
MB
Beats
5.00%
```

## Interesting LeetCode solution:
> by *[niits](https://leetcode.com/problems/merge-strings-alternately/solutions/5161375/video-simple-solution)*

```js
var mergeAlternately = function(word1, word2) {
    let merged = [];

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) {
            merged.push(word1[i]);
        }
        
        if (i < word2.length) {
            merged.push(word2[i]);
        }
    }

    return merged.join("");    
};
```

## Notes about the interesting one:

Their approach was simpler than mine and the explanation was very detailed. They have a video about this question as well.

---