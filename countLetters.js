const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

const sentense = "lighthouse in the house";
const result1 = countLetters(sentense);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1['a'], undefined);
assertEqual(result1[" "], undefined);



