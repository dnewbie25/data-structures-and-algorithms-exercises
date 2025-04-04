# 28th Kata -- RGB To Hex Conversion





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
```js
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
```


## Test Examples

```js
describe("Tests", () => {

  const { strictEqual } = require('chai').assert;

  function doTest(r, g, b, expected) {
      const actual = rgb(r, g, b);
      const message = `for r = ${r} g = ${g} b = ${b}`;
      strictEqual(actual, expected, message);
  }

  it("Sample Tests", () => {
    doTest(  0,   0,   0, '000000');
    doTest(  0,   0, -20, '000000');
    doTest(300, 255, 255, 'FFFFFF');
    doTest(173, 255,  47, 'ADFF2F');
  });
});

```


## Notes

The easiest way was using `toString(16)` but I wanted to solve it on my own, without using built-in methods.

## My solution with comments:

```js
// I apply a function to each number and then join the results into the hexadecimal string
function rgb(r, g, b) {
  let arr = [r, g, b]
  arr = arr.map(item => {
    if (item <= 0) {
      return 0
    } else if (item >= 255) {
      return 255
    } else {
      return item
    }
  })
  console.log(arr);

  return (hexConverter(arr[0]) + hexConverter(arr[1]) + hexConverter(arr[2]));
}

// I created this function to convert each number into its equivalent base 16 number
function hexConverter(num) {
  if (num === 0) {
    return '00'
  }
  if (num === 255) {
    return 'FF'
  }
  let temp = num
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

  let result = []

  while (temp > 0) {
    result.unshift(hexArr[temp % 16])
    temp = Math.floor(temp / 16)
  }
  if (result.length === 1) {
    result.unshift(0)
  }
  return result.join('')
}
```


## Results

```js

//hopefully good results here

```

## Interesting Kata solution:
> by *[somebody](https://example.com)*

```js

//interesting solution here

```

## Notes about the interesting one:

Interesting kata notes here

---