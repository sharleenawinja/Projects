//this approach does not remove all unwanted elements
//because with removing an item, you get the next value at the same index
//loop from the end to avoid this

function removeElement(arr, val) {
    const arrlength = arr.length;
    for(i =0; i < arrlength; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
    return arr.length;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));


//correct approach
function noUnwantedElements(arr, val) {
    const arrlength = arr.length;
    for (i = arr.length -1; i >= 0; i--) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
    }

    console.log(arr);
    return arr.length;
}

console.log(noUnwantedElements([3, 2, 2, 3], 3));
console.log(noUnwantedElements([0, 1, 2, 2, 3, 0, 4, 2], 2));

//another approach using filter
const removingElements = (arr, val) => {
    const arrlength = arr.length;
    const newArr = arr.filter(num => num !== val);
    console.log(newArr);
    return newArr.length;
}

console.log(removingElements([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removingElements([3, 2, 2, 3], 3));