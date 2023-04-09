const rotateArray = (a, k) => {
  let newArr = [];
  for (let i = 0; i < k; i++) {
    let lastEl = a.pop();
    a.unshift(lastEl);
  }
  newArr = [...a];
  return newArr;
};

const result = rotateArray([1, 2, 3, 4], 4); // => should rotate array and return [9, 7, 6, 3, 8]
console.log("result", result);
