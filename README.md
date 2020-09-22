# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vvei/lotide`

**Require it:**

`const _ = require('@vvei/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return the first element in the array
* `middle(array)`:return the middle element of the array if the array is odd, and return the two middle elements if the array is even
* `tail(array)`: return the last element in the array
* `eqArrays(array1, array2)`: return true if the two passed arrays are equal; otherwise, return false
* `eqObjects(object1, object2)`: return true if the two passed objects are equal; otherwise, return false
