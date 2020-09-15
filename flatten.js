let result = [];
const flatten = function(array) {
  for (let item of array) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      flatten(item);
    }
  }
  return result;
};

// => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6]]));
// test double nested array
console.log(flatten([1, 2, [3,[11,12], 4], 5, [6]]));