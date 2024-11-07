const reverseVowels = function (s) {
  const vowels = 'aeiouAEIOU'
  const arr = s.split('')
  let matches = []

  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      matches.push(arr[i])
      arr[i] = 'REPLACE'
    }
  }
  matches = matches.reverse()
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'REPLACE') {
      arr[i] = matches[index]
      index += 1
    }
  }
  return arr.join('')
}
