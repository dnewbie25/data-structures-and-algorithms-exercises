# 16th -- Median of Two Sorted Arrays





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

```py
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

```


## Test Examples

```js

Case 1:
nums1 =
[1,3]
nums2 =
[2]

Case 2:
nums1 =
[1,2]
nums2 =
[3,4]

```


## Notes

The challenge was a good way to practice list destructuring and statistics, as the median equations were needed to solve it more efficiently

## My solution with comments:

```py

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    '''Joins the two arrays into a single one, then it uses the median equations if the number of elements or even or odd to
    calculate the median of the array'''
        joined_arr = [*nums1,*nums2]
        joined_arr.sort()
        if len(joined_arr) == 1:
            return joined_arr[0]
        if len(joined_arr)%2==0:
            return (joined_arr[(len(joined_arr)+1)//2-1] + joined_arr[((len(joined_arr)+1)//2)])/2
        else :
            return joined_arr[(len(joined_arr))//2]        

```


## Results

```py
Runtime
78
ms
Beats
72.35%

Memory
16.78
MB
Beats
91.97%

Case 1:
Output
2.00000
Expected
2.00000

Case 2:
Output
2.50000
Expected
2.50000

```

## Interesting LeetCode solution:
> by *[singhh_sidhantt](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/4070500/99-journey-from-brute-force-to-most-optimized-three-approaches-easy-to-understand)*

```py

class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        # Merge the arrays into a single sorted array.
        merged = nums1 + nums2

        # Sort the merged array.
        merged.sort()

        # Calculate the total number of elements in the merged array.
        total = len(merged)

        if total % 2 == 1:
            # If the total number of elements is odd, return the middle element as the median.
            return float(merged[total // 2])
        else:
            # If the total number of elements is even, calculate the average of the two middle elements as the median.
            middle1 = merged[total // 2 - 1]
            middle2 = merged[total // 2]
            return (float(middle1) + float(middle2)) / 2.0

```

## Notes about the interesting one:

Although the solutions uses a the same approach as mine, their code is cleaner.

---
