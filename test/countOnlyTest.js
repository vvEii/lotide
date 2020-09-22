const assert = require('chai').assert;

const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it("return 1 for Jason's number of occurences", () => {
    assert.strictEqual(result['Jason'], 1);
  });
  it("return 2 for Fang's number of occurences", () => {
    assert.strictEqual(result['Fang'], 2);
  });
  it("return undefined for Karima's number of occurences", () => {
    assert.strictEqual(result['Karima'], undefined);
  });
  it("return undefined for Jason's number of occurences", () => {
    assert.strictEqual(result['Agouhanna'], undefined);
  });
});
