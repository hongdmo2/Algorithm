/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let i = digits.length - 1;
let carry = 1;
while (i >= 0){
    let sum = digits[i] + carry;
    carry = Math.floor(sum / 10);
    digits[i] = sum % 10;
    if (carry == 0)
        break;
    i--;
}
if (carry > 0){
    digits.unshift(carry);
}
return digits;
};