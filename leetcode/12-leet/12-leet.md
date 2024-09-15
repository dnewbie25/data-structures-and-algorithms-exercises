# 12th -- Remove Duplicates from Sorted Array





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

- Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Custom Judge:

The judge will test your solution with the following code:
```c++
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

```js
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

```


## Test Examples

```js

Case 1:
nums = [1,1,2]

Case 2:
nums = [0,0,1,1,1,2,2,3,3,4]

```


## Notes

This question was horribly wrong written. The question was asking to remove duplicates, but it had a custom testing function. The question was not actually asking to remove duplicates, it was asking to put the unique numbers at the front of the array and returning the number of elements that were unique. Even though they only required the total number of unique elements, the testing was customized and it was evaluating not only the final return, but the body of the function.

Literally there was only one way to solve it. Many comments complaint about the question.

## My solution with comments:

```js

// Solution accepted by the challenge
var removeDuplicates = function(nums) {
  if(nums.length===0){
    return 0
  }

  let k = 1;
  // this was the part that was necessary to pass the challenge. They needed to move the elements in the array in place without creating another array, however the initial question was to return the size of the array of unique elements k
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==nums[k-1]){
      nums[k] = nums[i]
      k++
    }
  }
  // returns the same number as my solution
  return k
};


// My own solution
var removeDuplicates = function(nums) {
  if(nums.length===0){
    return 0
  }
  // creates a hashmap, the keys are the unique elements
  let hasmap = {}
  for(let i of nums){
    hasmap[i] = hasmap[i] + 1 || 1
  }
  // returns the length of the keys array
  return Object.keys(hasmap).length
};

```


## Results

```js

Runtime
48
ms
Beats
98.55%

Memory
52.46
MB
Beats
39.11%

Case 1:
Output
[1,2]
Expected
[1,2]

Case 2:
Output
[0,1,2,3,4]
Expected
[0,1,2,3,4]

```

## Interesting LeetCode solution:
> by *[sze_chi](https://example.com)*

```js
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};

```

## Notes about the interesting one:

Their solution was basically the same for every published solution. This question was more about evaluating the actual algorithm than the output. Labeled as `Easy` but should have been `Medium`

---