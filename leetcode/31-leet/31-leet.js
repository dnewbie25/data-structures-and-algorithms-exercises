const reduce = function (nums, fn, init) {
  return nums.reduce((acc, curr) => fn(acc, curr), init)
}
