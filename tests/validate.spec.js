const data = require('../tests/mocks/dataMocks')
const validate = require('../mdlinks-modules/validate')

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

  test('validation formatter should return correct format', () => {
    return validate.validationFormatter([data.validated[0]]).then(arr =>{
      expect(arr[0]).toEqual("C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md Markdown 200 OK");
    }).catch(err => console.error(err));
  })

  test('bad URLs should be ignored and console log', () => {
    return Promise.all(validate.getValidation([{url: 'fudgecakefact`ory'}])).then(result => {
      expect(result).toEqual([{url: 'fudgecakefact`ory'}]);
    })
  })