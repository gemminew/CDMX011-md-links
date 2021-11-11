/* eslint-env jest */
const mdLinks = require('../md-links');
const data = require('../tests/mocks/dataMocks')
const validate = require('../mdlinks-modules/validate')
const files = require('../mdlinks-modules/readFile');
//const directories = require ('./mdlinks-modules/readDirectory');
//const stats = require('./mdlinks-modules/stats.js');

/* describe('mdlinks it is a function', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  })
});
 */
it("should return a url", () => {
  const result = files.filterLinks(['./tests/mocks/mockREADME.md']);
  expect(result[0].url).toEqual('https://nodejs.org/es/about/');
});

describe('Validate', () => {
  it('should be a function', () => {
    expect(typeof validate.getValidation).toBe('function')
  });

});

