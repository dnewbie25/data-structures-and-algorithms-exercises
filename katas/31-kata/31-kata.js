function generateHashtag(str) {
  if (str.length === 0) {
    return false
  }
  let arr = str.split(' ')
  arr = arr.filter(item => item).map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
  if (arr.length === 0) {
    return false
  }
  return arr.join('').length < 140 && `#${arr.join('')}`

}