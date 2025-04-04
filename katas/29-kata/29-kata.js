var solution = function (firstArray, secondArray) {
  const absValues = []
  for (i = 0; i < firstArray.length; i++) {
    absValues.push(Math.abs(firstArray[i] - secondArray[i]) ** 2)
  }
  return absValues.reduce((prev, curr) => prev += curr) / absValues.length
}
