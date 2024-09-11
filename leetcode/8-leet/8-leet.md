# 8th -- Remove Element





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

```js
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}

```

If all assertions pass, then your solution will be accepted.

```js
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```


## Test Examples

```js

Case 1:
nums = [3,2,2,3]
val = 3

Case 2:
nums = [0,1,2,2,3,0,4,2]
val = 2

```


## Notes

Notes here

## My solution with comments:

```js
var removeElement = function(nums, val) {
  // position keeps track of where the numbers that do not match 'val' are
  let position = 0;
  for(let item of nums){
    // if the number is different than 'val' then it moves it to the left, leaving all numbers equal to 'val' out of the new array
    if(item!==val){
      nums[position] = item
      // once the number is moved, then add 1 to position to move it to the next index
      position++
    }
  }
  return position
};
```


## Results

```js

Runtime
54
ms
Beats
51.51%

Memory
49.00
MB
Beats
55.64%

Case 1:
Output
[2,2]
Expected
[2,2]

Case 2:
Output
[0,1,3,0,4]
Expected
[0,1,4,0,3]


```

## Interesting LeetCode solution:
> by *[devanshupatel](https://example.com)*

```js
function removeElement(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
}
```

## Notes about the interesting one:

The solution is basically the same as mine, however they choose to use a regular `for` loop instead of `for...of`. Time complexity is `O(n)` for both.

---