const mySqrt = function (x) {
  if (x < 0) {
    return null
  }
  // return the integer part of the result
  return Math.floor(Math.sqrt(x))
}
