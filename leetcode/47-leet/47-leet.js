const moveZeroes = function (nums) {
  let totalZeroes = 0
  let index = 0
  while (index <= nums.length) {
    if (nums[index] === 0) {
      totalZeroes += 1
      nums.splice(index, 1)
      continue
    }
    index++
  }
  for (let countZeros = 0; countZeros < totalZeroes; countZeros++) {
    nums.push(0)
  }
  return nums
}
