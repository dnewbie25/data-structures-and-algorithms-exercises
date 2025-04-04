function rgb(r, g, b) {
  let arr = [r, g, b]
  arr = arr.map(item => {
    if (item <= 0) {
      return 0
    } else if (item >= 255) {
      return 255
    } else {
      return item
    }
  })
  console.log(arr);

  return (hexConverter(arr[0]) + hexConverter(arr[1]) + hexConverter(arr[2]));
}

function hexConverter(num) {
  if (num === 0) {
    return '00'
  }
  if (num === 255) {
    return 'FF'
  }
  let temp = num
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

  let result = []

  while (temp > 0) {
    result.unshift(hexArr[temp % 16])
    temp = Math.floor(temp / 16)
  }
  if (result.length === 1) {
    result.unshift(0)
  }
  return result.join('')
}