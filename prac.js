let age = 24;


// function addNums(a, b){
//     return a+b;
// }
// console.log(addNums(5, 10));

const addNums = (a, b) =>{
    console.log("called from arrow")
    return a+b;

}
let a = addNums(5, 11);
console.log(a);

// if ( age < 30 ){
//     console.log("Younger than 30")
// }else{
//     console.log("older than 30")
// }

age < 30 ? console.log("Younger than 30 ") : console.log("older than 30 ")