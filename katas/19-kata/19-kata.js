function digitalRoot(n) {
  const nStr = n.toString()
  let numbers = []
  let currentNum = nStr
  while(currentNum.length > 1){
    console.log(currentNum);
    
    const currentNumArray = currentNum.split('')
    const sum = currentNumArray.reduce((sum, current)=> sum += parseInt(current),0)
    currentNum = sum.toString()
  }
  return parseInt(currentNum)
}