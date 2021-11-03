var rotate = function(nums, k) {
    let pos = (k % nums.length)//set up how many time rotating of array
    console.log(pos)
    let n = nums.splice(nums.length - pos) //remove and save at the element that needs to roate
    nums.splice(0, 0, ...n)//splice(starting point, how many element, replacing this)
    console.log(nums)
    };

let nums = [1,2,3,4,5,6,7]
let k = 3
rotate(nums, k)
