const dir = require('../mdlinks-modules/readDirectory')
const data = require('./mocks/dataMocks')

describe('readDir it is a function', () => {
  it('should be a function', () => {
    expect(typeof dir.directory).toBe('function');
  })
});

it("It should not return files without.md extension", () => {
    const a = dir.directory('C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\package.json');
    expect(a).toEqual(data.MDCheck[1]);
  }); 

  it("should return an array with paths", () => {
    expect(dir.directory("./tests")).toEqual([
      "C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\tests\\mocks\\mockREADME.md",
    ])
});

it('should return directory route', () => {
    const pathToDir = 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\tests\\mocks';
    const accessToDir = dir.directory(pathToDir);
    expect(accessToDir).toContain('C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\tests\\mocks\\mockREADME.md');
  });