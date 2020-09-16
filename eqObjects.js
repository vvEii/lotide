const assertEqual = function (actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let isSame = true;
  let sizeOfObject1 = Object.keys(object1).length;
  let sizeOfObject2 = Object.keys(object2).length;
  if (sizeOfObject1 !== sizeOfObject2) {
    isSame = false;
    return false;
  }
  for (let item in object1) {
    if (!Array.isArray(object1[item]) && !Array.isArray(object2[item])) {
      if (object1[item] !== object2[item]) {
        isSame = false;
        return isSame;
      }
    } else if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        isSame = false;
        return isSame;
      }
    } else {
      isSame = false;
      return isSame;
    }
  }
  return isSame;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(abc, ab), false);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);