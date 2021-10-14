
a = [25, 2, 3, 57, 38, 41]
const mostFrequentDigit= (a)=>{
    let i = 0;
    while(i>=0){
        if(a[i]>10){
            a.splice(i,1,parseInt(a[i]/10),(a[i]%10))
        }
        i++;
        if(a[i]===undefined){
            break;
        }
    }
    // let dup =[];
    // let compare = [];
    // for(let i of a){
    //     if(!compare.includes(i)){
    //         compare.push(i)
    //     }
    //     else{
    //         dup.push(i);
    //     }
        
    // } 
    //printing out elements that is duplicated. 
    console.log(a);
    return counter(a);
   
}
function counter(a){
    
    var count = {}
    for(var i = 0; i < a.length; i++){
        var num = a[i];
        count[num] = count[num] ? count[num] + 1 : 1;  
        console.log(count[num])
    }
      
    
    return count;
}
console.log(mostFrequentDigit(a))