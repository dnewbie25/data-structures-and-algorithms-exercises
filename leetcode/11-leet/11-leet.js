var longestCommonPrefix = function (strs) {
  let answer = "";
  const sortedArray = strs.sort();
  const firstEl = sortedArray[0]
  const lastEl = sortedArray[sortedArray.length - 1]
  const maxLength = firstEl.length > lastEl.length ? firstEl.length : lastEl.length;
  for (let i = 0; i < maxLength; i++) {
    if (firstEl[i]!==lastEl[i]){
      return answer
    }
    answer += firstEl[i]
  }
  return answer
};