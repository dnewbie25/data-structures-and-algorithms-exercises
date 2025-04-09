# 31st Kata -- The Hashtag Generator





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

Examples:

```js
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```


## Test Examples

```js
const { assert } = require('chai');

describe("Tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(generateHashtag(""), false, "Expected an empty string to return false")
    assert.strictEqual(generateHashtag(" ".repeat(200)), false, "Still an empty string")
    assert.strictEqual(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
    assert.strictEqual(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
    assert.strictEqual(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
    assert.strictEqual(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
    assert.strictEqual(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
    assert.strictEqual(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
    assert.strictEqual(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
    assert.strictEqual(generateHashtag("a".repeat(140)), false, "Too long")
  });
});

```


## Notes

Notes here

## My solution with comments:

```js
function generateHashtag(str) {
  if (str.length === 0) {
    return false
  }

  // split the string into an array of words
  let arr = str.split(' ')

  // filter out empty strings and capitalize the first letter of each word
  // and lowercase the rest of the word
  arr = arr.filter(item => item).map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
  
  // if the array is empty after filtering, return false
  if (arr.length === 0) {
    return false
  }

  // if the length of the joined string is less than 140, return the hashtagged string
  // otherwise return false
  return arr.join('').length < 140 && `#${arr.join('')}`
}
```


## Results

```js
Time: 741ms Passed: 2Failed: 0
Test Results:
Tests
Fixed tests
Random tests
Completed in 4ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[deanvn](https://www.codewars.com/kata/reviews/5244ae768c42b450e0000005/groups/557fc9640d0cabddb2000104)*

```js
function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
```

## Notes about the interesting one:

I haven't found many examples of people using the `reduce()` to handle text, only number. This one was a good example of using the reduce function with strings.

---