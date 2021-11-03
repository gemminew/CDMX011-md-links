const files = require('../mdlinks-modules/readFile');
const directories = require ('../mdlinks-modules/readDirectory');

describe('filterLinks it is a function', () => {
    it('should be a function', () => {
      expect(typeof files.filterLinks).toBe('function');
    })
  });

it("should return a md file", () => {
    const result = files.filterLinks('../README.md');
    expect(result).toEqual(data.MDCheck[0]);
  });

it("should return an object with url, status, path", () => {
    expect(files.filterLinks(directories.directory("./tests"))).toStrictEqual([ //can i use dataMock [0]?
        {
          file: "C:\Projects\CDMX011-md-links\CDMX011-md-links\README.md",
          href: "https://nodejs.org/es/about/",
          text: "Acerca de Node.js - Documentación oficial",
          type: "idk",
        }])
})