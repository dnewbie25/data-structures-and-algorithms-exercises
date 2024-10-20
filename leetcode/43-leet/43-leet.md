# 43rd -- Single Number





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

```js
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
```


## Test Examples

```js
Case 1
Input
nums =
[2,2,1]

Case 2
Input
nums =
[4,1,2,1,2]

Case 3
Input
nums =
[1]
```


## Notes

Notes here

## My solution with comments:

```js
var singleNumber = function(nums) {
  // creates a hashmap for each number
  let obj = {}
  for(let i of nums){
    if(obj.hasOwnProperty(i)){
      obj[i]+=1
    }else{
      obj[i] = 1
    }
    
  }
  // if any element is found only once, then return that element
  for(let i in obj){
    if(obj[i]<2){
      return parseInt(i)
    }
  }
};

```


## Results

```js
Runtime
11
ms
Beats
99.36%

Memory
52.97
MB
Beats
30.09%
```

## Interesting LeetCode solution:
> by *[linfongi](https://leetcode.com/problems/single-number/solutions/43193/javascript-solution)*

```js
function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}
```

## Notes about the interesting one:

The code is very elegant, it uses a `XOR` operator which is the caret `^` symbol. What is does is that the reduce function takes the accumulator (`prev`) and assigns the result of the `prev ^ curr` operation. It evaluates if the value has been encountered before by using this definition:

- If you XOR a number with itself, the result is 0. For example: `a ^ a = 0`
- If you XOR a number with 0, the result is the number itself. For example: `a ^ 0 = a`

If a number is repeated twice, then it will cancel out and return a `0`. If the number is not repeated, then it will return the same number `a`, and that is the number the problem is asking for.

---