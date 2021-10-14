var romanToInt = function(s) {
 const roman ={'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
 let integer = 0;

 for (i=0; i<s.length; i++){
     let current = roman[s[i]];
     let next = roman[s[i+1]];
     if (current < next ){
        integer += next - current;
        //IIX  = 8  II-> IX = 7
        i++;  
     }
     else {
         integer += current;
     }
     
 }
 return integer;

};


console.log(romanToInt('III'));

/*var add=function(a,b){
 
    return a+b;
}
console.log(add(1,4));*/
//III = 3 , IIV != 3
// var <= global, let<= lexical scope, const = final(invulerable,unchangable)