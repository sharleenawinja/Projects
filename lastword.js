//Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
//return the length of last word in the string.

//First approach; iterate string from index 0
//first trim spaces before or at the end of the string 
//since it might be difficult to detect spaces at the end of the last word

function lengthOfLastWord(string) {
    let newString = string.trim();
    let newStringLength = newString.length;
    let wordLength = 0;

    for(i =0; i < newStringLength; i++) {
        if(newString[i] !== ' ') {
            wordLength++;
        } else {
            wordLength = 0;
        }
    }

    return wordLength;

}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("Geeks For Geeks"));
console.log(lengthOfLastWord("Start Coding Here"));


//second approach
//iterate the string from the last index
//more efficient since we stop incrementing once we encounter white space

function lengthOfFinalWord(string) {
    let newString = string.trim();
    let newStringLength = newString.length;
    let wordLength = 0;

    for(i = newStringLength - 1; i >= 0; i--) {
        if (newString[i] !== ' ') {
            wordLength++
        } else 
            break;
    }
    return wordLength;
}

console.log(lengthOfFinalWord("Hello World"));
console.log(lengthOfFinalWord("Geeks For Geeks"));
console.log(lengthOfFinalWord("Start Coding Here"));