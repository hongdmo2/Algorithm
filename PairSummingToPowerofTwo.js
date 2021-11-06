function pairSummingToPowerOfTwo(a) {
    let result = 0;
    for(let i = 0; i<a.length; i++){
        for(let j = i; j<a.length; j++){
            if((Math.log(a[i]+a[j])/Math.log(2))%1 ===0){
                result++
            }
        }
    }
    return result;  
}
a = [1, -1, 2, 3]
console.log(pairSummingToPowerOfTwo(a))