const files = require('../mdlinks-modules/readFile');
const directories = require ('../mdlinks-modules/readDirectory');
const data = require("./mocks/dataMocks");

describe('filterLinks it is a function', () => {
    it('should be a function', () => {
      expect(typeof files.filterLinks).toBe('function');
    })
  });

it("should return an md file", () => {
    const result = files.filterLinks(['C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\tests\\mocks\\mockREADME.md']);
/*     console.log("fart")
    console.log(result) */
    expect(result[0].file).toEqual(data.MDCheck[2][0]);
  });


it("should return an object with url, status, path", () => {
    expect(files.filterLinks(directories.directory("./tests/mocks"))).toEqual([ //can i use dataMock [0]?
         {
          file: "C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\tests\\mocks\\mockREADME.md",
          message: "PENDING",
          status: 100,
          text: "Acerca de Node.js - Documentación oficial",
          url: "https://nodejs.org/es/about/",
          
        }])
}) 

it('should return all the links in the file.', () => {
  const allMDLinks = ['C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\tests\\mocks\\mockREADME.md'];
  const result = files.filterLinks(allMDLinks);
  expect(result.length).toEqual(1);
});