const assertEqual = function(actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result;
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
  return result;
};

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(data, x => x.stars === 2),'noma');
