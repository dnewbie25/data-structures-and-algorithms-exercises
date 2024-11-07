const cancellable = function (fn, args, t) {
  const timerSetUp = setTimeout(() => {
    fn(...args)
  }, t)

  return function () {
    clearTimeout(timerSetUp)
  }
}
