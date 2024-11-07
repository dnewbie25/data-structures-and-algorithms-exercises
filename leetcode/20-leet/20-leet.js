const smallestEvenMultiple = function (n) {
  let i = 1
  while (true) {
    if (i % 2 === 0 && i % n === 0) {
      return i
    }
    i++
  }
}
