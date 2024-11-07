const removeElement = function (nums, val) {
  let position = 0
  for (const item of nums) {
    if (item !== val) {
      nums[position] = item
      position++
    }
  }
  return position
}
