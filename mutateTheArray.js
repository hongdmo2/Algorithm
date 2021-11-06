/*
Given an integer n and an array a of length n, your task is to apply the following mutation to a:

Array a mutates into a new array b of length n.
For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].
*/

function mutateTheArray(n, a) {
    let b = []
    if(n==1){
        return a
    }
for(let i = 0; i<n; i++){
    if(i==0){
        b[i] = a[i]+a[i+1]
    }
    else if(i>0&&i!==n-1){
        b[i] = a[i-1] +a[i] + a[i+1]
    }
    else{
        b[i] = a[i-1] + a[i]
    }
}
return b
}
let a = [4, 0, 1, -2, 3]
let n = a.length;
console.log(mutateTheArray(n,a))