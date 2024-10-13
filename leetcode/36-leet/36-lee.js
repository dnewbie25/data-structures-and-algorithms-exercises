var cancellable = function (fn, args, t) {
  let timerSetUp = setTimeout(() => {
    fn(...args)
  }, t)

  return function () {
    clearTimeout(timerSetUp)
  }
};