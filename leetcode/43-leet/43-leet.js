const singleNumber = function (nums) {
  const obj = {}
  for (const i of nums) {
    if (obj.hasOwnProperty(i)) {
      obj[i] += 1
    } else {
      obj[i] = 1
    }
  }
  for (const i in obj) {
    if (obj[i] < 2) {
      return parseInt(i)
    }
  }
}
