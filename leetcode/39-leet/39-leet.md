# 39th -- Chunk Array





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

```js
Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
Example 3:

Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
Example 4:

Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.
```


## Test Examples

```js
Case 1
Input
arr =
[1,2,3,4,5]
size =
1

Case 2
Input
arr =
[1,9,6,3,2]
size =
3

Case 3
Input
arr =
[8,5,3,2,6]
size =
6

Case 4
Input
arr =
[]
size =
1
```


## Notes

Notes here

## My solution with comments:

```js
var chunk = function(arr, size) {
    let newArr = []
    for(let i = 0; i<arr.length; i+=size){
        newArr.push(arr.slice(i, i+size))
    }
    return newArr
};
```


## Results

```js

Runtime
40
ms
Beats
99.03%

Memory
51.42
MB
Beats
62.71%

```

## Interesting LeetCode solution:
> by *[VehicleOfPuzzle](https://leetcode.com/problems/chunk-array/solutions/5727606/more-than-you-ever-wanted-to-know-about-this-topic)*

```ts
function chunk<T>(arr: readonly T[], size: number): T[][] {
  const res: T[][] = [];

  // Maintain a variable for the current chunk we're assembling.
  let currentChunk: T[] = [];

  for (const element of arr) {
    currentChunk.push(element);

    // When we have a full chunk, add it to the result and reset.
    if (currentChunk.length === size) {
      res.push(currentChunk);
      currentChunk = [];
    }
  }

  // Unfortunately this means we need an additional check for the last chunk.
  if (currentChunk.length > 0) {
    res.push(currentChunk);
  }

  return res;
}
```

## Notes about the interesting one:

The code is in Typescript. Although I don't understand everything it has, the explanation about the solution was very good and it clarified everything.

---
