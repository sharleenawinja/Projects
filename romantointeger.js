//PROBLEM
//Given a roman numeral; convert it into an integer

function romanToInteger(str) {
    //there are seven symbols in the roman numeral system. 
    //first map each symbol to its value
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    //create a variable to represent the integer converted from roman numerals
    let result = 0;

    //If the numerals are descending from left to right, largest to smallest, then they are added together. But if the numerals begin to ascend in order, then the larger number is subtracted by the preceding smaller number. For instance, in XVIV, X and V are added together to make 15. Because the I is followed by a larger number, V, it is subtracted from that number to make 4 and then added to the preceding XV to make 19.
    
    //iterate from left to right. if the current symbol (cur) is less than the symbol to its right (next), then cur will be subtracted from next and then move two characters to the right
    //otherwise we will add them

    for (i= 0; i < str.length; i++) {
        let cur = sym[str[i]];
        let next = sym[str[i+1]];

        if(cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }
    return result;
};

console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));