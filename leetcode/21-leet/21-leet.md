# 21th -- Find the Maximum Achievable Number





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:

- Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.
- Return the maximum achievable number after applying the operation at most t times.

```js
Example 1:

Input: num = 4, t = 1

Output: 6

Explanation:

Apply the following operation once to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.
Example 2:

Input: num = 3, t = 2

Output: 7

Explanation:

Apply the following operation twice to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.

```


## Test Examples

```js


Case 1:
Input
num =
4
t =
1

Case 2:
Input
num =
3
t =
2
```


## Notes

This was a troll problem. After many attempts I just try randomly to return num + 2*t and it worked. The text of the problem was nonsense

## My solution with comments:

```js
var theMaximumAchievableX = function(num, t) {
    return num + 2*t
};

```


## Results

```js
Runtime
85
ms
Beats
81.95%

Memory
52.88
MB
Beats
89.15%

Case 1:
Ouput
6
Expected
6

Case 2:
Ouput
7
Expected
7
```

## Interesting LeetCode solution:
> by *[alekseyvy](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4274170/easy-solution-with-step-by-step-explanation)*

```java

class Solution {
    public int theMaximumAchievableX(int num, int t) {
        // return result of math operation of t * 2 + num
        return num + (t * 2);
    }
}

```

## Notes about the interesting one:

This solution demonstrated me that I was not wrong. The problem was literally a troll problem, worded very complicatedly just because.

---
