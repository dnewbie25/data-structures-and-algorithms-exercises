const once = function (fn) {
  let functionCalled = false
  let result
  return function (...args) {
    if (!functionCalled) {
      result = fn(...args)
      functionCalled = true
      return result
    } else {
      return undefined
    }
  }
}
