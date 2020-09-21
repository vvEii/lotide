const { assert } = require('chai');

const tail = require('../tail');

describe("#tail", () => {
  it(`return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });
  it(`return [] for ["Hello"]`, () => {
    assert.deepEqual(tail(["Hello"]),[]);
  });
  it(`return [] for []`, () => {
    assert.deepEqual(tail([]),[]);
  });
  it(`the length should keep same after the function call tail(["Hello", "Lighthouse", "Labs"])`, () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const originalLength = input.length;
    tail(input);
    const newLength = input.length;
    assert.strictEqual(originalLength, newLength);
  });
});