# 54th -- Find the Highest Altitude

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

```js
Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
```

## Test Examples

```js
Case 1
gain =
[-5,1,5,0,-7]

Case 2
gain =
[-4,-3,-2,-1,4,3,2]
```

## Notes

The real altitude gain is the result of adding/substracting all the other altitudes.

## My solution with comments:

```js
const largestAltitude = function (gain) {
  // create a sum variable to keep track of the changes in altitude
  let sum = 0;
  // create an array 'newArr' to add the new values of the altitude when adding the element to 'sum'
  const newArr = [0];
  for (const altitude of gain) {
    sum += altitude;
    newArr.push(sum);
  }
  // sorts the array from lowest to highest altitude, the last value will be the actual altitud change of the whole trip
  const highestPoint = newArr.sort((a, b) => a - b);
  return highestPoint[highestPoint.length - 1];
};
```

## Results

```js
Runtime
1
ms
Beats
22.45%

Memory
49.24
MB
Beats
16.39%
```

## Interesting LeetCode solution:

> by _[seredulichka](https://leetcode.com/problems/find-the-highest-altitude/solutions/2480590/javascript-less-than-86-85-and-faster-than-91-23)_

```js
const largestAltitude = (gain) => {
  let previous = 0;
  let biggest = 0;

  for (let i = 0; i < gain.length; i += 1) {
    previous += gain[i];
    if (previous > biggest) biggest = previous;
  }

  return biggest;
};
```

## Notes about the interesting one:

This one does basically the same as mine, but without using an array to keep track of the altitude changes. If the current altitude is smaller than the previous one, it just set the `biggest` altitude to the `previous` value. In any case, it adds the altitude to the `previous` variable to track the total altitude change.

---
