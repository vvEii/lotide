// FUNCTION IMPLEMENTATION
const middle = function(array) {
  let middle = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middle.push(array[middleIndex - 1]);
      middle.push(array[middleIndex]);
    } else {
      middle.push(array[middleIndex]);
    }
  }
  return middle;
};

module.exports = middle;
