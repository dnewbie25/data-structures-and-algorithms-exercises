// Solution accepted by the challenge
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  let k = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}

// My own solution
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  const hasmap = {}
  for (const i of nums) {
    hasmap[i] = hasmap[i] + 1 || 1
  }
  return Object.keys(hasmap).length
}
