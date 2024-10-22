# 46th -- Reverse Vowels of a String





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
```js
Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"
```


## Test Examples

```js

Case 1
s = 
"IceCreAm"

Case 2
s =
"leetcode"
```


## Notes

An easy question. The key was to crate a way to keep track of which letter were removed as they were vowels.

## My solution with comments:

```js
var reverseVowels = function(s) {
  // creates a string with the vowels and split the argument as an array
  const vowels = 'aeiouAEIOU'
  let arr = s.split('')
  let matches = []
  // each vowel is added to 'matches' and then replaced to REPLACE so it is easy to find later
  for(let i=0;i<arr.length;i++){
    if(vowels.includes(arr[i])){
      matches.push(arr[i])
      arr[i] = 'REPLACE'
    }
  }
  // reverse the order of the vowels
  matches = matches.reverse()
  // 'index' tracks the position of the 'matches' array. The loop looks for the REPLACE text and assigns the actual vowel that must go there
  let index = 0
  for(let i=0;i<arr.length;i++){
    if(arr[i]==='REPLACE'){
      arr[i] = matches[index]
      index+=1
    }
  }
  // join the array to return the string
  return arr.join('')
};
```


## Results

```js
Runtime
7
ms
Beats
98.77%

Memory
55.10
MB
Beats
56.68%

```

## Interesting LeetCode solution:
> by *[Bogutskii](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3646561/the-shortest-solution)*

```js
const reverseVowels = function(s) {
    const vow = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/ig, el=> vow.pop());
};
```

## Notes about the interesting one:

A clever solution. The `vow` variable is an array that after every `pop()` call it reduces its size. Since `pop()` returns the last element, if its value is used in the `replace()` method, you get the actual string with the vowels reversed.

---