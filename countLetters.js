const assertEqual = function(actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentense) {
  let result = {};
  for (let letter of sentense) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] ++;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const sentense = "lighthouse in the house";
const result1 = countLetters(sentense);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1['a'], undefined);
assertEqual(result1[" "], undefined);



