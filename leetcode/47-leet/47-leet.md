# 47th -- Move Zeroes





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
```js
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
```


## Test Examples

```js
Case 1
nums =
[0,1,0,3,12]

Case 2
nums =
[0]
```


## Notes

This exercise was easy in the solution, but very difficult to make it more efficient. I reached a runtime efficiency of `O(n)`, was not able to make it execute faster or consume less memory. I try to mute the `nums` array to avoid creating many different arrays to store values.

## My solution with comments:

```js
var moveZeroes = function(nums) {
  // count the total number of zeroes
  let totalZeroes = 0;
  let index = 0
  /* when the loop finds a zero, increase totalZeroes by 1, then splice the nums array to remove that element and 
  continue to the next item, but without changing the index. That way it can deal with consecutive zeroes*/
  while(index<=nums.length){
    if(nums[index]===0){
      totalZeroes += 1
      nums.splice(index,1)
      continue
    }
    // otherwise, increase index
    index++
  }
  // add as many zeroes as totalZeroes indicates
  for(let countZeros = 0;countZeros<totalZeroes;countZeros++){
    nums.push(0)
  }
  // return the array
  return nums
};
```


## Results

```js
Runtime
14
ms
Beats
93.88%

Memory
54.47
MB
Beats
43.01%
```

## Interesting LeetCode solution:
> by *[niits](https://leetcode.com/problems/move-zeroes/solutions/5246963/video-two-pointer-solution)*

```js
var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }

    return nums;    
};
```

## Notes about the interesting one:

The solution uses the concept of `Two Pointers`, which I am not familiar with. The runtime complexity was still `O(n)`, but the memory complexity was `O(1)`, which made the program extremely efficient when using memory.

---