# 25th Kata -- Exes and Ohs


by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
```js
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```


## Test Examples

```js

const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe("XO", function() {
  it("Sample tests", function() {
    tester('xo', true);
    tester('XO', true);
    tester('xxxoo', false);
    tester("xxOo", true);
    tester('', true, 'Empty string contains equal amount of x and o');
  });
  const tester = (input, expected, msg) => {
    assert.strictEqual(XO(input), expected, `Failed for input: "${input}"${msg ? "\n\n" + msg : ''}\n`);
  };
});

```


## Notes

Notes here

## My solution with comments:

```js
function XO(str) {
// I decided to go with regular expressions to practice them a bit
 let obj = {'x':0,'o':0}
 const re = /[xo]/gi;
 let result = str.toLowerCase().match(re) // converts to lowercase case and creates an array with all the match
 if(!result){
  return true
 }
 result.forEach(letter => {
  if(obj.hasOwnProperty(letter)){
    obj[letter]+=1
  }
 });
 if(obj.x===obj.o){
  return true
 }
 return false
 
}


```


## Results

```js

Time: 865ms Passed: 2Failed: 0
Test Results:
XO
Fixed tests
Random tests
Completed in 69ms

```

## Interesting Kata solution:
> by *[kirilloid](https://www.codewars.com/kata/reviews/55908ab5932c2fc59f000070/groups/55c8b47c16ffe086d7000056)*

```js
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
```

## Notes about the interesting one:

Literally blew my mind when I read it. Regular expressions but so simplified. Only created to RegExes, each one will be an array and then compare the lengths.

---