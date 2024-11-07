const compose = function (functions) {
  const len = functions.length - 2
  return function (x) {
    if (functions.length === 0) {
      return x
    }
    let composition = functions[functions.length - 1](x)
    for (let i = len; i >= 0; i--) {
      composition = functions[i](composition)
    }
    return composition
  }
}
