const uniqueOccurrences = function (arr) {
  const hashmap = {}
  arr.forEach(e => hashmap[e] = hashmap[e] + 1 || 1)
  const valuesArr = Object.values(hashmap).sort()
  for (let i = 0; i < valuesArr.length - 1; i++) {
    if (valuesArr[i] === valuesArr[i + 1]) {
      return false
    }
  }
  return true
}