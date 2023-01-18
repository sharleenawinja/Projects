//PROBLEM
//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

function isPalindrome(num) {
    let str = num.toString();
    let length = str.length;
    for(let i = 0; i < length; i++) {
        if(str[i] !== str[length - 1 -i]) {
            return false;
        }
    } return true;
};

console.log(isPalindrome(121)); //expected output: true
console.log(isPalindrome(-121)); //expected output: false
console.log(isPalindrome(16461)); //expected output: true


//Write a program that reads a string from the user and determines whether or not it is a palindrome
// palindrome- a word that reads the same forwards and backwards
//the program should ignore any spaces and punctuation in the string and should be case-insensitive
//for examplee; the string 'racecar' and 'A man, a plan, a canal, Panama!' are both plaindromes

const checkPalindrome = (str) => {
 //changing to lowercase
 let strLower = str.toLowerCase();

 //removing spaces (removing all non-alphanumeric characters)
 let regexPattern = /[^A-Za-z0-9]/g;
 let strNoSpaces = strLower.replace(regexPattern, '');
 console.log(strNoSpaces);
 
 //checking if it is a palindrome
 let length = strNoSpaces.length;
 for(let i = 0; i < length/2; i++) {
    if (str[i] !== str[length - 1 -i]) {
        return false;
    }
 } return true;
};

console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('A man, a plan, a canal, Panama!')); //does not give expected output. Fix this later.