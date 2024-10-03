var numIdenticalPairs = function(nums) {
    let pairs = 0
    for(let i=0;i<nums.length-1;i++){
        for(let j=i;j<nums.length;j++){
            if(i<j && nums[i]==nums[j]){
                pairs++
            }
        }
    }
    return pairs
};
