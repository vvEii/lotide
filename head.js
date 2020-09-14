// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let goodEmoji = String.fromCodePoint(0x1F525);
  let badEmoji = String.fromCodePoint(0x1F608);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(array) {
  let head = array[0];
  return head;
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("good", "good");
assertEqual(1, 1);
assertEqual(2, 5);


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);