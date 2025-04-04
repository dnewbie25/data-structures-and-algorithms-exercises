# 27th Kata -- Counting Duplicates





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
```js
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

## Test Examples

```js
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(duplicateCount(""), 0);
    assert.strictEqual(duplicateCount("abcde"), 0);
    assert.strictEqual(duplicateCount("aabbcde"), 2);
    assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
    assert.strictEqual(duplicateCount("Indivisibility"), 1)
    assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  });
});

```


## Notes

This was a good practice for ternary operators.

## My solution with comments:

```js
function duplicateCount(text) {
  const obj = {}
  let count = 0
  text.toLowerCase().split('').forEach(item => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  })
  for (key in obj) {
    count = obj[key] > 1 ? count + 1 : count
  }
  return count
}

```


## Results

```js
Time: 804ms Passed: 4Failed: 0
Test Results:
Full tests
Example tests
should ignore case
characters may not be adjacent
Random tests
Completed in 3ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[glalev](https://www.codewars.com/kata/reviews/54c69b063962fac66a0001ab/groups/54d22559beeaaabb41000086)*

```js
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
```

## Notes about the interesting one:

It took me a bit to understand, but what that solution does is to filter the string to leave only repeating characters. In the resulting array there will be only a single character is it was repeated at least twice. So by returning the length of that array you will get the total of characters repeated.

---