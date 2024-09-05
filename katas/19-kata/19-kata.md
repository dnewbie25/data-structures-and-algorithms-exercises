# 19th Kata -- Sum of Digits / Digital Root





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

`Digital root` is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
```js
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

```


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});



```


## Notes

This problem was tricky, I just needed to use a `while` loop with the condition being the current number length

## My solution with comments:

```js
function digitalRoot(n) {
  const nStr = n.toString()
  let numbers = []
  let currentNum = nStr
  while(currentNum.length > 1){
    console.log(currentNum);
    
    const currentNumArray = currentNum.split('')
    const sum = currentNumArray.reduce((sum, current)=> sum += parseInt(current),0)
    currentNum = sum.toString()
  }
  return parseInt(currentNum)
}

```


## Results

```js

Time: 797ms Passed: 2Failed: 0
Test Results:
Basic tests
Should pass basic tests
Should pass random tests
Completed in 12ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[Balkoth](https://www.codewars.com/kata/reviews/541c8b5e7e4b4c61e2000149/groups/541df7aa259d9c7b80000a88)*

```js
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

```

## Notes about the interesting one:

This solution is really impressive. It is really short and it took me a while to figure out how it worked, but I had to read this Wikipedia article first, [Digital Root](https://en.wikipedia.org/wiki/Digital_root). It uses the Congruence Formula to solve it.

---