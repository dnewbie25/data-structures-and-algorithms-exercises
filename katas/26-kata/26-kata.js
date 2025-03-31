function isTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return false
  }
  const s = (a + b + c) / 2
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

  return area > 0;
}
