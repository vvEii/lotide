const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (eqObjects(actual, expected)) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

