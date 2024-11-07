const addTwoPromises = async function (promise1, promise2) {
  const n1 = await promise1
  const n2 = await promise2
  return n1 + n2
}
