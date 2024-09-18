var uncommonFromSentences = function(s1, s2) {
  let hash1 = {}
  let hash2 = {}
  
  for(let i of s1.split(' ')){
    hash1[i] = hash1[i] + 1 || 1
  }
  for(let i of s2.split(' ')){
    hash2[i] = hash2[i] + 1 || 1
  }

  let uncommon1 = Object.keys(hash1)
  let uncommon2 = Object.keys(hash2)
  
  let finalArr = []
  for(let i of uncommon1){
    if(!uncommon2.includes(i) && hash1[i]<=1){
      finalArr.push(i)
    }
  }
  for(let i of uncommon2){
    if(!uncommon1.includes(i) && hash2[i]<=1){
      finalArr.push(i)
    }
  }
  return finalArr
};