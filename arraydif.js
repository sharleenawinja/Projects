// implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(array1, array2) {
  return array1.filter((el) => !array2.includes(el));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// Write a function sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

// Input: [1, 2, 3, 4, 5]
// Expected output: 15

// Input: [-1, 0, 1, 2, 3]
// Expected output: 5

const sumArray = (arr) => {
  return arr.reduce((acc, value) => acc + value, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

// Write a function removeDuplicates that takes an array of strings as input and returns an array containing only the unique strings in the input array.

// Input: ['apple', 'banana', 'cherry', 'banana', 'durian', 'apple']
// Expected output: ['apple', 'banana', 'cherry', 'durian']

// Input: ['cat', 'dog', 'cat', 'fish', 'fish', 'bird', 'bird']
// Expected output: ['cat', 'dog', 'fish', 'bird']

function removeDuplicates(arr) {
  const result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}

console.log(
  removeDuplicates(["cat", "dog", "cat", "fish", "fish", "bird", "bird"])
);