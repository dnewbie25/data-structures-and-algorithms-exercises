const uncommonFromSentences = function (s1, s2) {
  const hash1 = {}
  const hash2 = {}

  for (const i of s1.split(' ')) {
    hash1[i] = hash1[i] + 1 || 1
  }
  for (const i of s2.split(' ')) {
    hash2[i] = hash2[i] + 1 || 1
  }

  const uncommon1 = Object.keys(hash1)
  const uncommon2 = Object.keys(hash2)

  const finalArr = []
  for (const i of uncommon1) {
    if (!uncommon2.includes(i) && hash1[i] <= 1) {
      finalArr.push(i)
    }
  }
  for (const i of uncommon2) {
    if (!uncommon1.includes(i) && hash2[i] <= 1) {
      finalArr.push(i)
    }
  }
  return finalArr
}
