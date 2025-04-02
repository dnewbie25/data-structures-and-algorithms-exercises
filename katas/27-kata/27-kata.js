function duplicateCount(text) {
  const obj = {}
  let count = 0
  text.toLowerCase().split('').forEach(item => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  })
  for (key in obj) {
    count = obj[key] > 1 ? count + 1 : count
  }
  return count
}

