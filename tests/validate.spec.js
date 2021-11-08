const data = require('../tests/mocks/dataMocks')
const validate = require('../mdlinks-modules/validate')
const files = require('../mdlinks-modules/readFile');

describe('Validate', () => {
    it('should be a function', () => {
      expect(typeof validate.getValidation).toBe('function')
    })
});

test('should return an object with the status code 200', () => {
    //.then is not a function - getValidation returns array of promises, not a single promise, use .all()?
    return Promise.all(validate.getValidation([data.status200])).then(res => {
      expect(res).toEqual([data.validated[0]]);
    });
  });

  test('should return an object with the status code 404', () => {
    return Promise.all(validate.getValidation([data.status404])).then(res => {
      expect(res).toEqual([data.validated[2]]);
    });
  });