var plusOne = function(digits) {
  let num = digits.join('')
  let big = BigInt(num) + 1n
  return big.toString().split('').map(e=>parseInt(e))
};