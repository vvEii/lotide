// FUNCTION IMPLEMENTATION
const without = function(original, unwanted) {
  let wanted = [];
  for (let i in original) {
    let temp = true;
    for (let j in unwanted) {
      if (original[i] === unwanted[j]) {
        temp = false;
        break;
      }
    }
    if (temp) {
      wanted.push(original[i]);
    }
  }
  return wanted;
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
// TEST CODE
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);
