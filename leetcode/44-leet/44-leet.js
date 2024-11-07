const mergeAlternately = function (word1, word2) {
  const largest = word1.length > word2.length ? word1.length : word2.length
  const arr1 = []
  const arr2 = []
  for (let i = 0; i < largest; i++) {
    if (word1[i]) {
      arr1.push(word1[i])
      arr1.push('')
    } else {
      arr1.push('')
    }
  }
  for (let i = 0; i < largest; i++) {
    if (word2[i]) {
      arr2.push('')
      arr2.push(word2[i])
    } else {
      arr2.push('')
    }
  }

  let newArr = []
  for (let i = 0; i < largest * 2; i++) {
    newArr.push(arr1[i])
    newArr.push(arr2[i])
  }
  newArr = newArr.filter(e => e !== undefined)
  return newArr.join('')
}
