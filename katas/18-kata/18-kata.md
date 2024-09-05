# 18th Kata -- Disemvowel Trolls





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

### kataNameHere

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata `y` isn't considered a vowel.


## Test Examples

```js
const chai = require('chai'), { assert } = chai;
chai.config.truncateThreshold;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })

```


## Notes

This one was a good exercise to practice RegEx.

## My solution with comments:

```js
// regex matching that returns all non-vowel letters. It is case insensitive by using /gi at the end 
function disemvowel(str) {
  return str.match(/[^aeiou]/gi).join('');
}

```


## Results

```js
Time: 787ms Passed: 101Failed: 0
Test Results:
Basic tests
Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[falloonalan](https://www.codewars.com/kata/reviews/52fba700adcd10b182000980/groups/5b18b8f33e96bd0e940002a1)*

```js
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

```

## Notes about the interesting one:

I thought about something similar to that other solution, but then got the idea of practicing RegEx with this exercise.

---