const isHappy = function (n) {
  const arr = n.toString().split('')
  let newNum = arr
  const numSet = new Set()
  do {
    const newArr = newNum.map(e => parseInt(e) ** 2)
    const sum = newArr.reduce((sum, current) => sum += current, 0)
    newNum = sum.toString().split('')
    if (numSet.has(newNum.join(''))) {
      if (newNum.join('') === '1') {
        return true
      } else {
        return false
      }
    }
    numSet.add(newNum.join(''))
  } while (newNum.length > 1 || newNum[0] !== 1)
  if (parseInt(newNum.join('')) === 1) {
    return true
  }
  return false
}
