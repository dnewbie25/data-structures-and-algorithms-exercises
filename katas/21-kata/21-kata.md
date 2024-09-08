# 21th Kata -- You're a square!





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

```
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

```


## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("isSquare", function(){
  it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});
```


## Notes

No special notes for this project. It was just having a good comprehension of the perfect square definition.

## My solution with comments:

```js
var isSquare = function(n){
  // if less than 0, square root does not exist
  if(n<0){
    return false
  }
  if(n===0){
    return true
  }
  // to know if a number is perfect square, if by applying the square root it returns an integer then is it perfect square, otherwise returns false
  const root = Math.sqrt(n)
  // checks if there are decimal places when subtracting the number from its integer part
  return (root-Math.floor(root))===0
}

```


## Results

```js

Time: 764ms Passed: 3Failed: 0
Test Results:
isSquare
should work for some examples
should work for random square numbers
should work for random numbers
Completed in 2ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[rbaumier](https://example.com)*

```js
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

```

## Notes about the interesting one:

By using the module operator or remainder with 1 it does exatly the same as I did, it evaluates if the square root has a fractional part, but with in less lines of code. It even works with negative numbers.

---