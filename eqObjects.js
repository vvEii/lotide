// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let sizeOfObject1 = Object.keys(object1).length;
  let sizeOfObject2 = Object.keys(object2).length;
  if (sizeOfObject1 !== sizeOfObject2) {
    return false;
  }
  for (let item in object1) {
    if (
      typeof object1[item] === 'object' &&
      object1[item] !== null &&
      !Array.isArray(object1[item]) &&
      typeof object2[item] === 'object' &&
      object2[item] !== null &&
      !Array.isArray(object2[item])
    ) {
      if (!eqObjects(object1[item], object2[item])) {
        return false;
      }
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
// console.log(
//   eqObjects({ a: { y: { r: { o: 0 } } } }, { a: { y: { r: { o: 0 } } } })
// ); // => true


