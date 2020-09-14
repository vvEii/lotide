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
const tail = function(array) {
  let tail = array.slice(1);
  return tail;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("good", "good");
assertEqual(1, 1);
assertEqual(2, 5);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail(["Hello"]);
assertEqual(result2.length, 0); // ensure we get back zero elements
assertEqual(result2[0], undefined); // ensure first element is undefined

const result3 = tail([]);
assertEqual(result3.length, 0); // ensure we get back zero elements
assertEqual(result3[0], undefined); // ensure first element is undefined

