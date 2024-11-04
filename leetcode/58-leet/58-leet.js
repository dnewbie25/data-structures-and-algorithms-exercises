const TimeLimitedCache = function () {
  this.cache = new Map()
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now()
  const existing = this.cache.get(key)
  const isUnexpired = existing && existing.expiry > currentTime

  // Clear existing timeout if it exists
  if (existing && existing.timeout) {
    clearTimeout(existing.timeout)
  }

  // Set new expiration
  const expiry = currentTime + duration
  const timeout = setTimeout(() => {
    this.cache.delete(key)
  }, duration)

  this.cache.set(key, { value, expiry, timeout })

  return !!isUnexpired
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const currentTime = Date.now()
  const data = this.cache.get(key)

  if (data && data.expiry > currentTime) {
    return data.value
  } else {
    // Clean up if expired
    if (data) {
      clearTimeout(data.timeout)
      this.cache.delete(key)
    }
    return -1
  }
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const currentTime = Date.now()
  let count = 0

  for (const [key, data] of this.cache) {
    if (data.expiry > currentTime) {
      count++
    } else {
      // Clean up expired keys
      clearTimeout(data.timeout)
      this.cache.delete(key)
    }
  }

  return count
}
