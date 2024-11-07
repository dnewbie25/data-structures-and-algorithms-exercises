# 60th -- Merge Two Sorted Lists

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

```js
Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
```

## Test Examples

```js
Case 1
Input
list1 =
[1,2,4]
list2 =
[1,3,4]

Case 2
Input
list1 =
[]
list2 =
[]

Case 3
Input
list1 =
[]
list2 =
[0]
```

## Notes

This one was an exercise that I choose specifically to practice the `linked lists` topic.

## My solution with comments:

```js
var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to act as the head of the merged list
  let dummy = new ListNode();
  let current = dummy;

  // Traverse both lists and append the smaller node to the merged list
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Append any remaining nodes from list1 or list2
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  // Return the head of the merged list
  return dummy.next;
};
```

## Results

```js
Runtime
0
ms
Beats
100.00%

Memory
51.94
MB
Beats
39.05%
```

## Interesting LeetCode solution:

> by _[niits](https://leetcode.com/problems/merge-two-sorted-lists/solutions/5111386/video-using-dummy-pointer-and-recursion-solution-as-a-bonus)_

```js
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }
    cur = cur.next;
  }

  cur.next = list1 || list2;

  return dummy.next;
};
```

## Notes about the interesting one:

The video was very explanatory about the `linked lists` topic.

---
