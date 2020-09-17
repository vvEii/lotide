const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (eqArrays(actual,expected)) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let result;
    for (let index in array1) {
      if (array1[index] === array2[index]) {
        result = true;
      } else {
        result = false;
      }
      if (!result) {
        return result;
      }
    }
    return result;
  }
};

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[0] + word[1]), [ 'gr', 'co', 'to', 'ma', 'to' ]);
assertArraysEqual(map(words, word => word += 'map'), ['groundmap', 'controlmap', 'tomap', 'majormap','tommap']);
