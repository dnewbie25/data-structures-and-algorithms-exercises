# 23th Kata -- Reverse words





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Complete the function that accepts a string parameter, and reverses each word in the string. <strong>All</strong> spaces in the string should be retained.

```js
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
```


## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});

```


## Notes

This one was a good challenge to use a more declarative-style programming. 

## My solution with comments:

```js
function reverseWords(str) {
  // it creates an array of words, then using a map function, reverses each word. Then join the array again
  // time complexity: O(n*m) where n is the number of words and m is the average length of each word
  return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
}     

```


## Results

```js
Time: 867ms Passed: 2Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 1ms
Random Tests
Testing for 100 random tests
Completed in 3ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[JDiddy8250](https://www.codewars.com/kata/reviews/5259b20d6021e9e14c0010d7/groups/5a0b4d821733983c51001e67)*

```js
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

```

## Notes about the interesting one:

Although it does the same, I find it interesting because it was the only one I saw using RegEx to separate the words by ignoring the whitespaces.

---