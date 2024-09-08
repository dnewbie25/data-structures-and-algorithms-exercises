# 22th Kata -- Regex validate PIN code





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)

```
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

```


## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("validatePIN", function() {
  it("should return False for pins with length other than 4 or 6", function() {
    Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
    Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
  
  it("should return False for pins which contain characters other than digits", function() {
    Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
    Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
  });
  
  it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
  });
});


```


## Notes

Notes here

## My solution with comments:

```js

function validatePIN (pin) {
  const regex = /[^0-9]/gi
  const nonNumbers = pin.toString().match(regex)
  
  if(nonNumbers){
    return false
  }
  if(pin.length===4 || pin.length === 6){
    return true
  }

  return false
}

```


## Results

```js
Time: 810ms Passed: 5Failed: 0
Test Results:
validatePIN
should return False for pins with length other than 4 or 6
should return False for pins which contain characters other than digits
should return True for valid pins
should handle all edge cases
should work with random input
Completed in 3ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[ooflorent](https://www.codewars.com/kata/reviews/55f8abdcb692958d4800000f/groups/55f926f7b4235d86de00012d)*

```js

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

```

## Notes about the interesting one:

A very good use of RegExp and use of the `test()` function to validate quickly the PIN length and numbers.

---