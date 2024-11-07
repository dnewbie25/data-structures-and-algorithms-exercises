/**
 * Analyze the time complexity (Big O) of this function
 * Time complexity: O(n^2) because there are two nested loops
 * Space complexity: O(n) because a new array of the same length is created
 */
const productExceptSelf = function (nums) {
  const answers = new Array(nums.length)
  const prefix = new Array(nums.length)
  const postfix = new Array(nums.length)

  // for prefix
  for (let i = 0; i < answers.length; i++) {
    if (i === 0) {
      prefix[i] = nums[i]
    } else {
      prefix[i] = nums[i] * prefix[i - 1]
    }
  }
  // for postfix
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfix[i] = nums[i]
    } else {
      postfix[i] = nums[i] * postfix[i + 1]
    }
  }
  // return the answer
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      answers[i] = postfix[i + 1]
    } else if (i === nums.length - 1) {
      answers[i] = prefix[i - 1]
    } else {
      answers[i] = prefix[i - 1] * postfix[i + 1]
    }
  }
  return answers
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
