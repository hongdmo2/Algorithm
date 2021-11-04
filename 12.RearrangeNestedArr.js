arr = ["Daisy", "Rose", "Hyacinth","Poppy"]
arr2 = ["E", "M", "I", "L", "Y"]
arr1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12,13]]

function rearrange(arr){
let a = Math.max(...arr.map(x=>x.length))
let result = ""
for(let i = 0; i< a; i++){
    for(let j = 0; j<arr.length; j++){
        if(arr[j][i]===undefined){
            result += "" 
        }
        else {
            result += arr[j][i]
        }
    }
}
console.log(result)
}

rearrange(arr)

