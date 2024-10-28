const findDifference = function (nums1, nums2) {
  const hash1 = {}
  const hash2 = {}
  nums1.forEach(e => {
    hash1[e] = hash1[e] + 1 || 1
  })
  nums2.forEach(e => {
    hash2[e] = hash2[e] + 1 || 1
  })
  const hash1Keys = Object.keys(hash1)
  const hash2Keys = Object.keys(hash2)
  return [hash1Keys.filter(key => !hash2Keys.includes(key)).map(e => parseInt(e)),
    hash2Keys.filter(key => !hash1Keys.includes(key)).map(e => parseInt(e))]
}
