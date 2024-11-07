const containsDuplicate = function (nums) {
  const numsHash = {}
  for (const i of nums) {
    numsHash[i] = numsHash[i] + 1 || 1
    if (numsHash[i] > 1) {
      return true
    }
  }
  return false
}
