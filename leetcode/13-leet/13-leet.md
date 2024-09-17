# 13th -- Search Insert Position





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.
 
```js
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
```


## Test Examples

```js

Case 1:
nums =
[1,3,5,6]
target =
5

Case 2:
nums =
[1,3,5,6]
target =
2

Case 3:
nums =
[1,3,5,6]
target =
7

```


## Notes

The tricky part was to have the complexity below `O(log n)`, but keeping the code with only 1 loop is enough to not go above that.

## My solution with comments:

```js

var searchInsert = function(nums, target) {
  // if the target is smaller than the first number, then it must be positioned at index 0
  if(target<=nums[0]){
    return 0
  }
  // if the target is greater than the current number but smaller than the next one, it should be located between those 2 indexes
  for(let i=0;i<nums.length-1;i++){
    if(target>=nums[i]&&target<=nums[i+1]){
      return i+1
    }
  }
  // otherwise it must be the last element, so it will be position at the nums.length index
  return nums.length
};

```


## Results

```js

Runtime
65
ms
Beats
5.00%

Memory
48.80
MB
Beats
76.38%

Case 1:
Output
2
Expected
2

Case 2:
Output
1
Expected
1

Case 3:
Output
4
Expected
4

```

## Interesting LeetCode solution:
> by *[Asheem_Rahman](https://leetcode.com/problems/search-insert-position/solutions/5648173/efficiently-finding-or-inserting-a-target-in-a-sorted-array-using-binary-search)*

```js

ar searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length-1
    while( start <= end ){
        let mid = Math.floor((start + end)/2)
        if(target == nums[mid]){
            return mid
        }else if (target > nums[mid]){
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return start
};

```

## Notes about the interesting one:

The solution uses a binary search algorithm. It splits in halves until it reached a half of only two numbers where the target number belongs. That way it reduces the time to complete the insertion. Very intelligent solution and well explained.

---