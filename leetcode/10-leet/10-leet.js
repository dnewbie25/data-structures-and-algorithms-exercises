var lengthOfLastWord = function(s) {
  const regex = /(\w+)/gi
  const arr = s.match(regex)
  return arr[arr.length-1].length
};