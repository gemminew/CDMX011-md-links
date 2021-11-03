/* eslint-env jest */
const mdLinks = require('../md-links');
const data = require('../tests/mocks/dataMocks')
const validate = require('../mdlinks-modules/validate')
const files = require('./mdlinks-modules/readFile');
const directories = require ('./mdlinks-modules/readDirectory');
const stats = require('./mdlinks-modules/stats.js');

/* describe('mdlinks it is a function', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('promise');
  })
});
 */
it("should return a md file", () => {
  const result = files.filterLinks('../README.md');
  expect(result).toEqual(data.MDCheck[0]);
});

describe('Validate', () => {
  it('should be a function', () => {
    expect(typeof validate.getValidation).toBe('function')
  });

  test('should return an object with the status code 200', () => {
    return validate.getValidation(?200).then(res => { //how can i get the 200 status code?
      expect(res).toEqual(data.checkStatusValue[0]);
    });
  });

  test('should return an object with the status code 404', () => {
    return validate.validate(?404).catch(res => {
      expect(res).toEqual(data.checkStatusValue[1]);
    });
  });
});

/* 
describe('stats', () => {
  it('should be a function', () => {
    expect(typeof stats.stats).toBe('function')
  });

  it("should return an object with 3 properties when validate is true", () => {
    const validateTrue = stats.stats(data.arrayValidated);
    expect(validateTrue).toEqual(data.resultArrayValidated);
  });

  it("should return an object with 2 properties when validate is false", () => {
    const validateFalse = stats.stats(data.arraySimple);
    expect(validateFalse).toEqual(data.resultArraySimple);
  }); */