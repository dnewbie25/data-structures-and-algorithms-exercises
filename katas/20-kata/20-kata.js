function sizeToNumber(size) {
  const sizeArr = size.split('')
  // checks is no argument is passed
  if(!size){
    return null
  }
  // creates an object with the base sizes
  const baseSizes = {
    "m":38,
    "s":36,
    "l":40
  }
  // creates a hashmap counting all the letters
  const hashmap = {}
  for(let letter of size){
    hashmap[letter] = hashmap[letter] + 1 || 1
  }
  // if only one character is passed, return its value if it is one of the base sizes
  if(size.length===1 && baseSizes.hasOwnProperty(size[0])){
    return baseSizes[size]
  }
  // if size has two letters but two or more are not 'x' return null
  if(!hashmap.hasOwnProperty('x')){
    return null
  }
  // if one of the bases is repeated, return null
  for(let base in hashmap){
    if(base!=='x' && hashmap[base]>1){
      return null
    }
  }

  // starts the sum to get the european size
  let europeanSize = 0;
  // only if the first letter is an 'x'
  if(size[0]==='x'){
    for(let i of sizeArr){
      // if there is an 's', it substracts 2 for each 'x' found
      if(i==='x' && hashmap.hasOwnProperty('s')){
        europeanSize -= 2
      // if there is an 'l', it adds 2 for each 'x' found
      }else if(i==='x' && hashmap.hasOwnProperty('l')){
        europeanSize += 2
      // adds the base size
      }else if(i==='s' || i==='l'){
        europeanSize += baseSizes[i]
      // any other combination is invalid
      }else{
        return null
      }
    }
  }
  return europeanSize
}