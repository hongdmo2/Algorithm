




// const generateParenthesis=(n)=>{
//     const solution =[];
    
//     const generateCombo=(leftPcount, rightPcount, partial)=>{
//         if(leftPcount > rightPcount){return};
//         if(!leftPcount&&!rightPcount){solution.push(partial)}
//         if(leftPcount>0){generateCombo(leftPcount-1,rightPcount,partial+'(')}
//         if(rightPcount>0){generateCombo(leftPcount,rightPcount-1,partial+')')}
//     }
//     generateCombo(n, n, '');
//     return solution;
// }

// console.log(generateParenthesis(3));

function countDown(frontNumber){
    console.log(frontNumber);

    let nextNumber = frontNumber -1;
    if(nextNumber >0){
        countDown(nextNumber);
    }
}
countDown(3);