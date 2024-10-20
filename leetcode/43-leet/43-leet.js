var singleNumber = function(nums) {
  let obj = {}
  for(let i of nums){
    if(obj.hasOwnProperty(i)){
      obj[i]+=1
    }else{
      obj[i] = 1
    }
    
  }
  for(let i in obj){
    if(obj[i]<2){
      return parseInt(i)
    }
  }
};