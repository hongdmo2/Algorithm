/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky 
if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not
*/

function isLucky(n) {
    var a=(n+"").split(""),half=a.length/2,l=0,r=0
    while(a.length>half){r+= +a.pop()}
    while(a.length){l+= +a.pop()} 
    return l===r
  }
  