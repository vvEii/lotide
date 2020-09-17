// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (eqArrays(actual, expected)) {
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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [];
      results[letter].push(index);
    }
    index++;
  }
  return results;
};
const sentense = 'small';
const result1 = letterPositions(sentense);

assertArraysEqual(result1['s'], [0]);
assertArraysEqual(result1['m'], [1]);
assertArraysEqual(result1['a'], [2]);
assertArraysEqual(result1['l'], [3, 4]);

const sentense2 = 'lighthouse in the house';
const result2 = letterPositions(sentense2);

assertArraysEqual(result2['h'], [3, 5, 15, 18]);
assertArraysEqual(result2['s'], [8, 21]);

