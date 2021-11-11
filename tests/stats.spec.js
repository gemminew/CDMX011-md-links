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

  it('should return an empty array.', async () => {
    await stats.getStats([]).then(result =>{
      expect(result).toEqual([{Total:0,Unique:0}]); 
    });
  })

  it("should return an object with 3 properties when validate is true", async () => {
    await stats.getStats(data.validated).then(result => {
      expect(result).toEqual([data.resultsArray]);
    })

/*     return Promise.all(stats.getStats([data.validated])).then(res => {
      expect(res).not.toEqual([data.resultArrayValidated]);
    }); */
  });

  it("should return an empty array", async () => {
    await stats.stats([]).then(result => {
      expect(result).toEqual([{Total:0,Unique:0,Broken:0}]);
    });
  })
  
  it("should give correct results", async ()=>{
    await stats.stats(data.validated).then(result => {
      expect(result).toEqual([data.resultArrayValidated]);
    });
  })
  