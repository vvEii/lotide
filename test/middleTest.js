const { assert } = require('chai');

const middle = require('../middle');

describe("#middle", () => {
  it("return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
});

