const searchInsert = function (nums, target) {
  if (target <= nums[0]) {
    return 0
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (target >= nums[i] && target <= nums[i + 1]) {
      return i + 1
    }
  }
  return nums.length
}
