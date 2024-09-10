# 7th -- Product of Array Except Self





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

```js
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

```


## Test Examples

```js

Case 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Case 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

```


## Notes

This one was hard to complete. I had to create two arrays to keep track of the elements to the left and right so the multiplication.

## My solution with comments:

```js
var productExceptSelf = function(nums) {
  let answers = new Array(nums.length)
  let prefix = new Array(nums.length);
  let postfix = new Array(nums.length)
  
  // for prefix, it adds the value that corresponds to the product of the current element with the previous one
  for(let i =0;i<answers.length;i++){
    if(i===0){
      prefix[i] = nums[i]
    }else{
      prefix[i] = nums[i]*prefix[i-1] 
    } 
  }
  // for postfix, it adds the value that corresponds to the product of the current element with the next one
  for(let i = nums.length-1;i>=0;i--){
    if(i===nums.length-1){
      postfix[i] = nums[i]
    }else{
      postfix[i] = nums[i]*postfix[i+1] 
    } 
  }
  // return the answer, with equals to the product of the previous element (using the index, gets the previous index from prefix) and the next one (using the index gets the next element from postfix)
  for(let i=0;i<nums.length;i++){
    if(i===0){
      answers[i] = postfix[i+1]
    }else if(i===nums.length-1){
      answers[i]= prefix[i-1]
    }else{
      answers[i] = prefix[i-1] * postfix[i+1]
    }
  }
  return answers
};
```


## Results

```js
Runtime
96
ms
Beats
81.20%
Analyze Complexity
Memory
66.08
MB
Beats
21.40%

Case 1:
Output
[24,12,8,6]
Expected
[24,12,8,6]

Case 2:
Output
[0,0,9,0,0]
Expected
[0,0,9,0,0]

```

## Interesting LeetCode solution:
> by *[pbriss](https://leetcode.com/problems/product-of-array-except-self/solutions/65663/javascript-solution-if-anyone-is-interested/)*

```js

var productExceptSelf = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (var j=0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};

```

## Notes about the interesting one:

This one achieves the same but without creating to additional arrays. It uses two loops to point to the elements to the left and right and make the multiplication.

---