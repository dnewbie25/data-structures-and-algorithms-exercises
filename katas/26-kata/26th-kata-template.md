# 26th Kata -- Is this a triangle?





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:
```js
Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false
```


## Test Examples

```js

const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})

```


## Notes

I use the semiperimeter to calculate the area

## My solution with comments:

```js
// my solution uses the semiperimeter formula or "s". If the area is greater than 0,
// then the triangles exist. 
function isTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return false
  }
  const s = (a + b + c) / 2
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

  return area > 0;
}
```


## Results

```js

Time: 802ms Passed: 104Failed: 0
Test Results:
Public tests
Testing for fixed tests
Test 1
Test 2
Test for negative values
Completed in 1ms
Random tests
isTriangle(2,9,5) should equal false
isTriangle(-1,10,6) should equal false
isTriangle(2,1,5) should equal false
isTriangle(2,4,8) should equal false
isTriangle(2,9,10) should equal true
isTriangle(5,5,3) should equal true
isTriangle(9,6,7) should equal true
isTriangle(5,4,4) should equal true
isTriangle(-2,-2,2) should equal false
isTriangle(9,0,7) should equal false
isTriangle(6,10,2) should equal false
isTriangle(1,8,4) should equal false
isTriangle(9,10,-2) should equal false
isTriangle(0,0,6) should equal false
isTriangle(4,0,3) should equal false
isTriangle(6,2,6) should equal true
isTriangle(7,0,2) should equal false
isTriangle(3,4,3) should equal true
Completed in 2ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[tdowek1](https://www.codewars.com/kata/reviews/5661cc7edaed5a2473000155/groups/569634ccf9ac7a12fd000002)*

```js
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
```

## Notes about the interesting one:

This solution uses a comparison of sides. In triangles, the sum of two sides is always greater than the remaining side.

---