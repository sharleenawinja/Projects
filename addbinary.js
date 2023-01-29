//Given two binary strings, return their sum (also a binary string).
//The input strings are both non-empty and contains only characters 1 or 0.

function addBinary(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
  }

console.log(addBinary('11', '1'));  
console.log(addBinary('11001', '101'));  