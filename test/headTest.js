// TEST CODE
const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("good", "good");
assertEqual(1, 1);
assertEqual(2, 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);