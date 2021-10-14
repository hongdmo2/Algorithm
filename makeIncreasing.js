function makeIncreasing(numbers){
for(let i = 0; i<numbers.length; i++){
    if(numbers[i]>numbers[i+1]){
        let reverse = numbers[i+1].toString().split("")
        reverse = reverse.reverse()
        let index = reverse.indexOf(0);
        if(index>-1){
            reverse.splice(index,1);
        }
        console.log(reverse);
    }
}
}
numbers = [100,50];

makeIncreasing(numbers);