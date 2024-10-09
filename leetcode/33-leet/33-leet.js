var addTwoPromises = async function(promise1, promise2) {
  let n1 = await promise1
  let n2 = await promise2
  return n1+n2
};