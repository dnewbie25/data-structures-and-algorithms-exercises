var createCounter = function (init) {
  let initialValue = init
  return {
    increment: () => initialValue += 1,
    decrement: () => initialValue -= 1,
    reset: () => initialValue = init
  }
};