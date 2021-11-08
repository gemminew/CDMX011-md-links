const stats = require('../mdlinks-modules/stats.js');
const data = require('./mocks/dataMocks.js');

describe('getStats it is a function', () => {
    it('should be a function', () => {
      expect(typeof stats.getStats).toBe('function');
    })
  });

  describe('stats it is a function', () => {
    it('should be a function', () => {
      expect(typeof stats.stats).toBe('function');
    })
  });

  it('should return an empty array.', () => {
 const expectedEmptyArray = stats.getStats([data.status200]);
    expect(expectedEmptyArray).not.toEqual([{ total: 1, unique: 1 }]); 
  })

  it("should return an object with 3 properties when validate is true", () => {
    const validateTrue = stats.getStats([data.validated]);
    expect(validateTrue).not.toEqual([data.resultArrayValidated]);

/*     return Promise.all(stats.getStats([data.validated])).then(res => {
      expect(res).not.toEqual([data.resultArrayValidated]);
    }); */
  });