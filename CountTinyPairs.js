let a = [1,2,3];
let b = [1,2,3];
let k = 31;
const CountTinyPairs= (a,b,k)=>{
    let result = [];
    let realresult =[];
    for(let i =0, j=b.length-1; i <a.length, j>=0; i++, j--){
        result[i] = "" + a[i] + b[j];
        if(result[i]<k){
            realresult[i] = result[i];
        }
    }
    console.log(realresult);
    console.log(realresult.length);
}
CountTinyPairs(a,b,k);

// const countTinyPairs = (a, b, k) => {
//     let str = "";
//     let count = 0;
//     for (let i = 0, j = b.length - 1; i < a.length, j >= 0; i++, j--) {
//       str = a[i] + "" + b[j];
//       if (Number(str) < k) count++;
//     }
//     return count;
//   };
  
//   console.log(countTinyPairs(a, b, k));