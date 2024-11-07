const plusOne = function (digits) {
  const num = digits.join('')
  const big = BigInt(num) + 1n
  return big.toString().split('').map(e => parseInt(e))
}
