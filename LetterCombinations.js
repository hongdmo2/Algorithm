let digits = "23"
let letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    let result = [];
    
    function permute(string, index) {
        console.log("START:::::::::::::::::::::::::::::::::::")
        if(index === digits.length) { 
            console.log("index in permute: ",index)
            result.push(string);
            console.log("result: ", result)
            console.log("=========================================")
            return;
        }
        
        for(let x of map[digits[index]]) {
            console.log("x: ",x)
            console.log("digits: ",digits)
            console.log("index: ",index)
            console.log("digits[index] :",digits[index])
            console.log("string: ",string,"string+x: ", string+x)
            console.log("map[digits]",map[digits])
            console.log("map[digits[index]]",map[digits[index]])
            console.log("=================????????????????????????")
            permute(string+x, index+1);
            console.log("string: ",string)
            console.log("=================!!!!!!!!!!!!!!!!!!!!!!!!")
            
        }
    }
    permute('', 0);
    return result;
};
console.log(letterCombinations(digits))
/*
string:             ''             'a'    'a'
indexs:             0               1      2
x:                  a               b      
digits[index]     : 2               3
map[digits[index]]: ['a','b,','c'][d,e,f]
result:           :none
*/