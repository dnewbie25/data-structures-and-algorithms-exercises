# 29th Kata -- Mean Square Error





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.

Examples:
```js
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
```


## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution([1,2,3],[4,5,6]), 9)
Test.assertEquals(solution([10,20,10,2],[10,25,5,-2]), 16.5)
Test.assertEquals(solution([0,-1], [-1,0]), 1)
});
});

```


## Notes

Thia one was a good way to refresh on the `reduce()` function.

## My solution with comments:

```js
var solution = function (firstArray, secondArray) {
  const absValues = []
  for (i = 0; i < firstArray.length; i++) {
    absValues.push(Math.abs(firstArray[i] - secondArray[i]) ** 2)
  }
  return absValues.reduce((prev, curr) => prev += curr) / absValues.length
}
```

```js
Time: 733ms Passed: 1Failed: 0
Test Results:
Tests
test
Completed in 1ms
You have passed all of the tests! :)
```


## Results

```js
Time: 733ms Passed: 1Failed: 0
Test Results:
Tests
test
Completed in 1ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[ooflorent](https://www.codewars.com/kata/reviews/51edd51599a189fe7f000018/groups/54212538dda52634fc000185)*

```js
function solution(a, b) {
  return a.reduce(function(s, n, i) { return s + Math.pow(n - b[i], 2) }, 0) / a.length;
}
```

## Notes about the interesting one:

A nice and short way to combine what I did but in a single line.

---