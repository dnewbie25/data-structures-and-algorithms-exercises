# 24th Kata -- Who likes it?





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

Note: For 4 or more names, the number in `"and 2 others"` simply increases.


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('example tests', function() {
  it('should return correct text', function() {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});

```


## Notes

This one was fairly easy. I thought of using a switch statement and for the case of 4 or more, just returning the length of array minus the first 2 elements and it worked.

## My solution with comments:

```js
function likes(names) {
  // the switch was the best approach for this
  switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
          // this last one, by just ubstracting 2 to the array length you get the desired output
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}
```


## Results

```js
Time: 852ms Passed: 5Failed: 0
Test Results:
static tests
should return correct text
Completed in 1ms
random tests
should return correct text for 1 name
should return correct text for 2 names
should return correct text for 3 names
should return correct text for 4 or more names
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[a2682824](https://www.codewars.com/kata/reviews/5266876c8f4bf2da9b000365/groups/5410adce20fd468f2e000ced)*

```js
function likes (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

```

## Notes about the interesting one:

This one got my attention because of the overhead. Not sure why they made it so complicated but it was interesting to see. Almost all the other solutions that I found were using either conditionals or switch statements.


---