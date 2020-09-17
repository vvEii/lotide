// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let index in array1) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  }
};

const middle = function(array) {
  let middle = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middle.push(array[middleIndex - 1]);
      middle.push(array[middleIndex]);
    } else {
      middle.push(array[middleIndex]);
    }
  }
  return middle;
};

assertEqual(eqArrays(middle([1]), []), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
