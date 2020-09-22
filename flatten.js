const flatten = function(array) {
  let result = [];
  array.forEach(element => {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      result = result.concat(flatten(element));
    }
  });
  return result;
};

module.exports = flatten;

