//PROBLEM
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

function twoSum(nums, target) {
    let length = nums.length;
    for(i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        //indexof method returns the first index (position) of a specified value.
        //indexOf method returns -1 if value is not found
        //The indexOf() method starts at a specified index and searches from left to right.
        //By default the search starts at the first element and ends at the last.
        //Negative start values counts from the last element (but still searches from left to right).

        let diffIndex = nums.indexOf(diff);
        if(diffIndex !== -1 && diffIndex !== i) {
            return [i, diffIndex];
        }
    }
};

console.log(twoSum([2, 7, 11, 5], 9)); //expected [0, 1]
console.log(twoSum([3, 2, 4], 6));  //expected [1, 2]
console.log(twoSum([15, 7, 11, 2], 9)); //expected [1, 3]

//Alternative approach
//the variable j should not be indexed from 0 because it will cause whatever element that resides at i to be considered twice
//j should always be i + 1
// for example given the array [3, 2, 4] and the target is 6; if both i and j are initialized as 0, then 3 + 3 will give six and the output will be [0, 0]; the problem with this is that no element in the array should be used twice
const sumOfTwo = (numbers, result) => {
    let length = numbers.length;
    for (let i = 0; i < length; i++) {
        for(let j = i + 1; j < length; j++) {
            let total = numbers[i] + numbers[j];
            if(total === result) {
                return [i, j];
            }
        }
    }
};

console.log(sumOfTwo([2, 7, 11, 5], 9)); //expected [0, 1]
console.log(sumOfTwo([3, 2, 4], 6));  //expected [1, 2]
console.log(sumOfTwo([15, 7, 11, 2], 9)); //expected [1, 3]