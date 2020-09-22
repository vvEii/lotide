const expect = require('chai').expect;

const letterPositions = require('../letterPositions');

describe('#letterPosition', () => {
  it('return an object with all chars and with a array contains index of their ocurrences', () => {
    expect(letterPositions('small')).to.eql({
      s: [0],
      m: [1],
      a: [2],
      l: [3, 4],
    });
  });
});
