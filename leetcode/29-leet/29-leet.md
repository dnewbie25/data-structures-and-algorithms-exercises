# 29th -- To Be Or Not To Be





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.
- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

```js
Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
```


## Test Examples

```js
Case 1
Input
func =
() => expect(5).toBe(5)

Case 2
Input
func =
() => expect(5).toBe(null)

Case 3
Input
func =
() => expect(5).notToBe(null)

```


## Notes

The challenge was interesting. I didn't know you could return objects of functions and use them.

## My solution with comments:

```js
// this one is fairly easy, only declare the functions and return an object with them
var expect = function(val) {
    const toBe = (arg)=>{
        if(val!==arg){
            throw new Error('Not Equal')
        }
        return true
    }

    const notToBe = (arg)=>{
        if(val===arg){
            throw new Error('Equal')
        }
        return true
    }
    // declaring the object this ways makes the key to equal the value
    return {
        toBe,
        notToBe
    }
};

```


## Results

```js
Runtime
55
ms
Beats
37.51%

Memory
49.05
MB
Beats
19.11%

Case 1
Output
{"value":true}
Expected
{"value":true}

Case 2
Output
{"error":"Not Equal"}
Expected
{"error":"Not Equal"}

Case 3
Output
{"value":true}
Expected
{"value":true}

```

## Interesting LeetCode solution:
> by *[TheGElCOgecko](https://leetcode.com/problems/to-be-or-not-to-be/solutions/3567095/full-thorough-explanation-simple-beginner-friendly)*

```js
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};

/* For example, when expect(5).toBe(4) is called,
   val is the expect parameter (so val equals 5),
   val2 is the toBe parameter (so val2 equals 4).
   Since val !== val2, aka 5 != 4, we throw error "Not Equal". */
```

## Notes about the interesting one:

I think this solution is more readable than my own. Declaring the functions directly in the return statements looks more elegant.

---