var generate = function(numRows) {
    /*
    1
    1 1 
    1 2 1
    1 3 3 1
    1 4 6 4 1
    1 5 10 10 5 1
    
    */
    
    let pascal = []
    for(let i = 0; i<numRows; i++){
        pascal[i] = [] //assign another array of pascal[i]
        pascal[i][0] = 1 //first place of the row should be 1 
        for(let j = 1; j<i; j++){
            pascal[i][j] = pascal[i-1][j-1]+ pascal[i-1][j] //adding last row's previous j and last row's present j
        }
        pascal[i][i] = 1//last place of the row should be 1
    }
    return pascal//return all the rows in the pascal array
};
const printlastrow = (numRows) =>{
    let pascal = []
    for(let i = 0; i<numRows; i++){
        pascal[i] = [] //assign another array of pascal[i]
        pascal[i][0] = 1 //first place of the row should be 1 
        for(let j = 1; j<i; j++){
            pascal[i][j] = pascal[i-1][j-1]+ pascal[i-1][j] //adding last row's previous j and last row's present j
        }
        pascal[i][i] = 1//last place of the row should be 1
    }
    return pascal.pop()//return last row of the array pascal
}

console.log(generate(5));
console.log(printlastrow(5));