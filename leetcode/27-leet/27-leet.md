# 27th -- Number of Good Pairs





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

```js
Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0

```


## Test Examples

```js

Case 1
Input
nums =
[1,2,3,1,1,3]

Case 2
Input
nums =
[1,1,1,1]

Case 3
Input
nums =
[1,2,3]
```


## Notes

Although the answer was fairly easy, the time complexity is something that I still struggle with. My code runs at `O(n^2)` which is not ideal

## My solution with comments:

```js
var numIdenticalPairs = function(nums) {
    let pairs = 0
    for(let i=0;i<nums.length-1;i++){
        for(let j=i;j<nums.length;j++){
            if(i<j && nums[i]==nums[j]){
                pairs++
            }
        }
    }
    return pairs
};

```


## Results

```js
Runtime
62
ms
Beats
9.08%

Memory
49.44
MB
Beats
7.42%

Case 1
Output
4
Expected
4

Case 2
Output
6
Expected
6

Case 3
Output
0
Expected
0

```

## Interesting LeetCode solution:
> by *[vishnoi29](https://leetcode.com/problems/number-of-good-pairs/solutions/4121915/one-line-beats-100-runtime-explanation)*

```js
function numIdenticalPairs(A) {
    let ans = 0;
    const cnt = {};
    
    for (let x of A) {
        ans += cnt[x] || 0;
        cnt[x] = (cnt[x] || 0) + 1;
    }
    
    return ans;
}

```

## Notes about the interesting one:

This one uses a single loop, improving execution time by a lot. I need to figure out how to avoid using nested loops to reduce time complexity.

---
