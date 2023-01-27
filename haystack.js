//Return the index of the first occurrence of needle in haystack, 
//or -1 if needle is not part of haystack.

function searchString(string, value) {
    let result = string.search(value);
    return result;
}

console.log(searchString('hello', 'll'));
console.log(searchString("aaaaa", 'bba'));
console.log(searchString("Mr. Blue has a blue house", 'blue'));