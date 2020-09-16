const assertEqual = function(actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let key;
  for (let item in obj) {
    if (obj[item] === value) {
      key = item;
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  secondDrama: "The Wrie"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sciFi');