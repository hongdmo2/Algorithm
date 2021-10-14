// let numbers = [100, 100, 100];
// let checker = [];
// const iszigzag = (numbers) =>{
//     for(let i = 0; i<numbers.length-2; i++){
//        if(numbers[i]<numbers[i+1]){
//            if(numbers[i+1]>numbers[i+2]){
//             checker[i] = 1;
//            }
//            else{
//             checker[i] =0;
//            }
//     }
//        else if(numbers[i]>numbers[i+1]){
//         if(numbers[i+1]<numbers[i+2]){
//          checker[i] = 1;
//         }
//         else{
//             checker[i] =0;
//            }
//     }
//         else {
//             checker[i] = 0;
//         }

//     }
// console.log(checker);
// } 

// iszigzag(numbers);
const isZigzag = (numbers) => {
    let res = [];
    let length = numbers.length - 2;
    for (let i = 0; i < length; i++) {
      (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbers[i + 2]) || (numbers[i] > numbers[i + 1] && numbers[i + 1] < numbers[i + 2])
        ? res.push(1)
        : res.push(0);
    }
    return res;
  };
  
  let numbers = [2, 3, 5, 1, 4, 6];
  console.log(isZigzag(numbers))

  //set is only for map
  //push is for object and arry
  // which is equals to "="