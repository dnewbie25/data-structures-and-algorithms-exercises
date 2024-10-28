# 51st -- Find the Difference of Two Arrays

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

- answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
- answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
  Note that the integers in the lists may be returned in any order.

```js
Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
```

## Test Examples

```js
Case 1
nums1 =
[1,2,3]
nums2 =
[2,4,6]

Case 2
nums1 =
[1,2,3,3]
nums2 =
[1,1,2,2]
```

## Notes

Notes here

## My solution with comments:

```js
var findDifference = function (nums1, nums2) {
  // creates two hashmaps
  let hash1 = {};
  let hash2 = {};
  // counts the elements in order to get the keys. It was required to use it this way because Leetcode doesn't support Sets yet
  nums1.forEach((e) => {
    hash1[e] = hash1[e] + 1 || 1;
  });
  nums2.forEach((e) => {
    hash2[e] = hash2[e] + 1 || 1;
  });
  // get the keys and filter them if they are not in the other hashmap
  let hash1Keys = Object.keys(hash1);
  let hash2Keys = Object.keys(hash2);
  return [
    hash1Keys.filter((key) => !hash2Keys.includes(key)).map((e) => parseInt(e)),
    hash2Keys.filter((key) => !hash1Keys.includes(key)).map((e) => parseInt(e)),
  ];
};
```

## Results

```js
Runtime
90
ms
Beats
6.74%

Memory
56.77
MB
Beats
30.32%
```

## Interesting LeetCode solution:

> by _[34days](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3480500/simple-js-solution-with-set)_

```js
var findDifference = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  for (let item of nums1) {
    if (nums2.has(item)) {
      nums1.delete(item);
      nums2.delete(item);
    }
  }
  return [Array.from(nums1), Array.from(nums2)];
};
```

## Notes about the interesting one:

This person solved it by using `Sets`, which was weird because when I was implementing my solution with `Sets` it was not allowing me to run the solution. I don't know if maybe there are differences between the free and paid instances of leetcode, because it threw the error `has()` is not a function, as if there was no Sets object available.

---