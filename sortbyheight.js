/*
Some people are standing in a row in a park. 
There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
People can be very tall!
*/

function sortByHeight(a) {
    let filtered = a.filter(x => x !== -1)//filter numbers above -1
    let sorted = filtered.sort((a, b) => a-b)// sort filtered numbers
    console.log(filtered)
    console.log(a)
    return a.map(x => x === -1? -1: sorted.shift())// In array 'a', copies values if index meets -1 
                                                    // else copies sorted.shift() which is first 
}
