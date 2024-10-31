const largestAltitude = function (gain) {
  let sum = 0
  const newArr = [0]
  for (const altitude of gain) {
    sum += altitude
    newArr.push(sum)
  }
  const highestPoint = newArr.sort((a, b) => a - b)
  return highestPoint[highestPoint.length - 1]
}
