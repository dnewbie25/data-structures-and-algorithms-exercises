var removeElement = function(nums, val) {
  let position = 0;
  for(let item of nums){
    if(item!==val){
      nums[position] = item
      position++
    }
  }
  return position
};