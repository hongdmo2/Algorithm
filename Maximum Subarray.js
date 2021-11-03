/*
Divide and conquer
*/
let input = [-2,1,-3,4-1,2,1,-5,4]
const maxSubArray =(nums)=>{
let solution = nums[0]; // base case
for(let i = 1; i<nums.length; i++){
    console.log("nums[",i,"]=",nums[i],"   nums[",i,"] + nums[",i-1,"] =", nums[i]+nums[i-1])
    nums[i] = Math.max(nums[i],nums[i]+nums[i-1]) //determine present value is greater or present plus previous value is greater
    console.log("nums[",i,"] = ", nums[i])
    solution = Math.max(solution, nums[i])
    console.log(solution)
}
console.log(nums)
return solution

}

console.log(maxSubArray(input))