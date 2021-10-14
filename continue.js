
const longestSubarrayCheck=(a, b, c)=>{
    let aStr = a.join(""); // remove all commas and bring'em as string type.
    let bStr = b.join("");
    let counter = 0;
    let flag = false;
    let sorted_c = c.sort((a,b)=>a-b).join("");  //SORT!!

    for(let i = 0; i<b.length; i++){ 
        if(aStr.includes(b[i])){
            counter++;//2
        }
    }
    // if(sorted_c.includes(bStr)&&counter>1&&counter==b.length){flag = true}
    (sorted_c.includes(bStr)&&counter>1&&counter==b.length) ? flag= true : flag=false;
    return flag;
}
let a = [1,2,3,6,1,1,1]
let b = [1,2,3];
let c = [2,1];

console.log(longestSubarrayCheck(a,b,c));