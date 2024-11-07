const cancellable = function (fn, args, t) {
  fn(...args)
  const interval = setInterval(() => fn(...args), t)

  function cancelFn () {
    clearInterval(interval)
  }
  return cancelFn
}
