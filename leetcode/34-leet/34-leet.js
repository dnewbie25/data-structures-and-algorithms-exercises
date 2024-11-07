const reverse = function (x) {
  const min = -(2 ** 31)
  const max = 2 ** 31 - 1
  if (x > max || x < min) {
    return 0
  }
  const str = x.toString().split('')
  let value = 0
  if (x < 0) {
    value = parseInt(str[0] + str.slice(1, str.length).reverse().join(''))
  } else {
    value = parseInt(str.reverse().join(''))
  }
  if (value > max || value < min) {
    return 0
  }
  return value
}
