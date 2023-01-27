//Given a sorted array nums, remove the duplicates in-place 
//such that each element appears only once and return the new length.

function removeDuplicates(arr) {
    const arrlength = arr.length;
    for (i = arrlength - 1; i >= 0; i--) {
        if(arr[i] === arr[i -1]) {
            arr.splice(i, 1);
        }
    }

    console.log(arr);
    return arr.length;
}

console.log(removeDuplicates([1,1,1,3,4,5,5,5,5,7,7,7,9,9]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


//when doing some processing on an array it is always good practice to check the length of the array


function removeDoubleDuplicates(arr) {
    const arrlength = arr.length;
    for (i = arrlength - 1; i >= 0; i--) {
        if(arr[i] === arr[i -2]) {
            arr.splice(i, 1);
        }
    }

    console.log(arr);
    return arr.length;
}

console.log(removeDoubleDuplicates([0,0,1,1,1,1,2,3,3]));