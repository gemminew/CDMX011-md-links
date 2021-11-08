const stats = require('../mdlinks-modules/stats.js');

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