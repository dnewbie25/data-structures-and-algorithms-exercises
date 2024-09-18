# 13th -- Uncommon Words from Two Sentences




by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

```js
Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"

Output: ["sweet","sour"]

Explanation:

The word "sweet" appears only in s1, while the word "sour" appears only in s2.

Example 2:

Input: s1 = "apple apple", s2 = "banana"

Output: ["banana"]

```


## Test Examples

```js

Case 1:

s1 =
"this apple is sweet"
s2 =
"this apple is sour"

Case 2:

s1 =
"apple apple"
s2 =
"banana"

```


## Notes

This problem could have been easily solved using `new Set()`, as sets can help to get the elements that do not belong to the intersection. But it seems that LeetCode prevented that function, because it was throwing an error as if it did not exist that function in the environment. 

## My solution with comments:

```js

var uncommonFromSentences = function(s1, s2) {
  // creates 2 hashmaps for each word as key and the occurrences as values
  let hash1 = {}
  let hash2 = {}
  
  for(let i of s1.split(' ')){
    hash1[i] = hash1[i] + 1 || 1
  }
  for(let i of s2.split(' ')){
    hash2[i] = hash2[i] + 1 || 1
  }
  
  // takes only the keys
  let uncommon1 = Object.keys(hash1)
  let uncommon2 = Object.keys(hash2)
  
  let finalArr = []
  // if the key is in one array but not in the other and the key in the other array is repeated at most once, then is in an uncommon word. Add it fo finalArr 
  for(let i of uncommon1){
    if(!uncommon2.includes(i) && hash1[i]<=1){
      finalArr.push(i)
    }
  }
  for(let i of uncommon2){
    if(!uncommon1.includes(i) && hash2[i]<=1){
      finalArr.push(i)
    }
  }
  return finalArr
};

```


## Results

```js

Runtime
59
ms
Beats
25.49%

Memory
50.63
MB
Beats
22.74%

Case 1:
Output
["sweet","sour"]
Expected
["sweet","sour"]

Case 2:
Output
["banana"]
Expected
["banana"]


```

## Interesting LeetCode solution:
> by *[asadullakkh](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/2309872/easy-way-of-solving-with-hashtables)*

```js

var uncommonFromSentences = function(s1, s2) {
    let a = [...s1.split(' '), ...s2.split(' ')]
    const obj = {};
    
    for(let i of a) {
        if(i in obj) {
            obj[i] += 1
        } else {
            obj[i] = 1
        } 
    }
    
    a = [];
    
    for(let i in obj) {
        if(obj[i] == 1) {
            a.push(i)
        }
    }
    
    return a;
};

```

## Notes about the interesting one:

This solution uses hashtables as well. But it is simplified in the way that it just joins the to sentences into a single array and creates a single hashmap. Each word that appears only once is then a unique word for both phrases, so is an `uncommon word`.

---