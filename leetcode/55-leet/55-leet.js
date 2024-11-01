function memoize (fn) {
  const cache = new Map()
  let callCount = 0

  function getKey (args) {
    return JSON.stringify(args)
  }

  const memoizedFn = (...args) => {
    const key = getKey(args)
    if (!cache.has(key)) {
      callCount++
      cache.set(key, fn(...args))
    }
    return cache.get(key)
  }

  memoizedFn.getCallCount = () => callCount
  return memoizedFn
}
