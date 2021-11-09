/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.split(" ")
    
    for(let i = 0; i<s.length; i++){
        let temp = s[i].split("").reverse()
        s[i] = temp.join("")
    }
    s = s.join(" ")
    return s
};
let s = "Let's take LeetCode contest"
console.log(reverseWords(s))