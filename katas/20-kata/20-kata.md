# 20th Kata -- Clothes size number converter





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Description
You have clothes international size as text `(xs, s, xxl)`.
Your goal is to return European number size as a number from that size.

Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.

```
Linearity
Base size for medium (m) is 38.
(then, small (s) is 36, and large (l) is 40)
```

The scale is linear; modifier `x continues that by adding or subtracting 2 from resulting size`.

(For sizes where x modifier makes total size negative, treat that as OK, and return negative size)

Invalid cases
Function should handle wrong/invalid sizes.

Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
Notice that you cannot apply modifier for m size, consider that case as invalid!
Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).

Invalid examples: xxx, sss, xm, other string

Valid Examples
```js
xs: 34
s: 36
m: 38
l: 40
xl: 42
```

## Test Examples

```js

const {assert} = require("chai");

describe("Clothes size number converter", function() {
  it("Basic tests", function() {
    assert.strictEqual(sizeToNumber("s"), 36, "Small size");
    assert.strictEqual(sizeToNumber("m"), 38, "Medium size");
    assert.strictEqual(sizeToNumber("l"), 40, "Large size");
    assert.strictEqual(sizeToNumber("xl"), 42, "Extra large");
    assert.strictEqual(sizeToNumber("xs"), 34, "Extra small")
  });
  it("Extra modifier tests", function() {
    assert.strictEqual(sizeToNumber("xxxs"), 30, "3-extra small");
    assert.strictEqual(sizeToNumber("xxxl"), 46, "3-extra large");
  });
  it("Invalid/wrong sizes/input", function() {
    assert.isNull(sizeToNumber(""), "Blank string is invalid");
    assert.isNull(sizeToNumber("xm"), "Cannot apply modifier for medium size (xm)");
    assert.isNull(sizeToNumber("xxxm"), "Cannot apply modifier for medium size (xxxm)");
    assert.isNull(sizeToNumber("xxxx"), "No base size provided (xxxx)");
    assert.isNull(sizeToNumber("ssss"), "Only one base size is allowed ('ssss')");
    assert.isNull(sizeToNumber("hello world"), "Any other text is invalid ('hello world')");
    assert.isNull(sizeToNumber("sm"), "Cannot have two bases ('sm')");
    assert.isNull(sizeToNumber("ml"), "Cannot have two bases ('ml')");
    assert.isNull(sizeToNumber("lm"), "Cannot have two bases ('lm')");
  });
});
```


## Notes

My algorithm is not very complex yet it is large. I was trying to let out any exception that I found. The real part of the european size calculator is just adding or subtracting a 2 for each 'x' if the next letter is an 's' or an 'l'.

Something I would add is that by reading comments from other solutions, many also think that this one is not a 7-kyu kata. Should be a 6-kyu at least.

## My solution with comments:

```js
function sizeToNumber(size) {
  const sizeArr = size.split('')
  // checks is no argument is passed
  if(!size){
    return null
  }
  // creates an object with the base sizes
  const baseSizes = {
    "m":38,
    "s":36,
    "l":40
  }
  // creates a hashmap counting all the letters
  const hashmap = {}
  for(let letter of size){
    hashmap[letter] = hashmap[letter] + 1 || 1
  }
  // if only one character is passed, return its value if it is one of the base sizes
  if(size.length===1 && baseSizes.hasOwnProperty(size[0])){
    return baseSizes[size]
  }
  // if size has two letters but two or more are not 'x' return null
  if(!hashmap.hasOwnProperty('x')){
    return null
  }
  // if one of the bases is repeated, return null
  for(let base in hashmap){
    if(base!=='x' && hashmap[base]>1){
      return null
    }
  }

  // starts the sum to get the european size
  let europeanSize = 0;
  // only if the first letter is an 'x'
  if(size[0]==='x'){
    for(let i of sizeArr){
      // if there is an 's', it substracts 2 for each 'x' found
      if(i==='x' && hashmap.hasOwnProperty('s')){
        europeanSize -= 2
      // if there is an 'l', it adds 2 for each 'x' found
      }else if(i==='x' && hashmap.hasOwnProperty('l')){
        europeanSize += 2
      // adds the base size
      }else if(i==='s' || i==='l'){
        europeanSize += baseSizes[i]
      // any other combination is invalid
      }else{
        return null
      }
    }
  }
  return europeanSize
}
```


## Results

```js
Time: 754ms Passed: 4Failed: 0
Test Results:
Clothes size number converter
Basic tests
Extra modifier tests
Invalid/wrong sizes/input
Random tests
Completed in 4ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[naomi-lgbt](https://www.codewars.com/kata/reviews/667dfc4c16fd726e23336a3a/groups/668c22dfbfb6644007b47177)*

```js
function sizeToNumber(size) {
  if (size == "s") return 36;
  if (size == "m") return 38;
  if (size == "l") return 40;
  const x = size.match(/x/g)?.length;
  if (/^x+s$/.test(size)) return 36 - (x * 2);
  if (/^x+l$/.test(size)) return 40 + (x * 2);
  return null
}

```

## Notes about the interesting one:

This is another kata where I forgot to use RegEx. I must think more about them first when encountering a problem related to manipulating strings.

---