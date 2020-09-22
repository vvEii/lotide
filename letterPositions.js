// FUNCTION IMPLEMENTATION
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

module.exports = letterPositions;

