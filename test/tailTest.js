const assertEqual = require('../assertEqual');
const tail = require('../tail');

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