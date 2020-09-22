const assert = require('chai').assert;

const flatten = require('../index').flatten;

describe('#flatten', () => {
  it('return one-level array for nested array', () => {
    const input = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(input), [1, 2, 3, 4, 5, 6]);
  });
  it('return one-level array for double nested arrays ', () => {
    const input = [1, 2, [3, [11, 12], 4], 5, [6]];
    assert.deepEqual(flatten(input), [1, 2, 3, 11, 12, 4, 5, 6]);
  });
});
