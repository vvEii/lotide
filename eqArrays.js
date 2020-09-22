const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let index in array1) {
      if (Array.isArray(array1[index]) && Array.isArray(array2[index])) {
        if (!eqArrays(array1[index], array2[index])) {
          return false;
        }
      } else if (
        typeof array1[index] === 'object' &&
        array1[index] !== null &&
        !Array.isArray(array1[index]) &&
        typeof array2[index] === 'object' &&
        array1[index] !== null &&
        !Array.isArray(array2[index])
      ) {
        if (!eqObjects(array1[index], array2[index])) {
          return false;
        }
      } else {
        if (array1[index] !== array2[index]) {
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = eqArrays;

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
// console.log(eqArrays(
//   [[2, 3], [4]],
//   [
//     [2, 3],
//     [4, 5],
//   ]
// )); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
// console.log(eqArrays([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }]));
