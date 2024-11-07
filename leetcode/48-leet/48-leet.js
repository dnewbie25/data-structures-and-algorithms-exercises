const reverseWords = function (s) {
  return s.match(/\w+/gi).reverse().join(' ')
}
