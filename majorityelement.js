/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    // Boyer-Moore Voting Algorithm
    let counte =0;
    let candidate = 0;
    for(let i = 0; i<nums.length; i++){
        if(counte == 0){
            candidate = nums[i]
        }
        if(candidate === nums[i]){
            counte++
        }
        else{
            counte--
        }
    }
    return candidate
};