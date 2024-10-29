const romanToInt = function (s) {
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sumToSubstract = 0
  for (let i = 0; i < s.length - 1; i++) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] === 'V' || s[i + 1] === 'X') {
          sumToSubstract -= 1
        } else {
          sumToSubstract += 1
        }
        break
      case 'X':
        if (s[i + 1] === 'L' || s[i + 1] === 'C') {
          sumToSubstract -= 10
        } else {
          sumToSubstract += numbers[s[i]]
        }
        break
      case 'C':
        if (s[i + 1] === 'D' || s[i + 1] === 'M') {
          sumToSubstract -= 100
        } else {
          sumToSubstract += 100
        }
        break
      default:
        sumToSubstract += numbers[s[i]]
        break
    }
  }
  const values = s.split('').map(e => numbers[e])
  sumToSubstract += numbers[s[s.length - 1]]
  return sumToSubstract
}