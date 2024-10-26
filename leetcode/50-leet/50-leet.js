const toHex = function (num) {
  if (num < 0) {
    const bitNum = 0xFFFFFFFF + num + 1
    return bitNum.toString(16)
  }
  return parseInt(num).toString(16)
}
