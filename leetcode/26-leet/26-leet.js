const isPalindrome = function (s) {
  const newString = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
  return newString.localeCompare(newString.split('').reverse().join('')) === 0
}
