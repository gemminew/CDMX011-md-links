const MDCheck = [
["C:/Projects/CDMX011-md-links/CDMX011-md-links/README.md"], [], ["C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\tests\\mocks\\mockREADME.md"]
]
const checkStatusValue = [
    {
        url: 'https://github.com/workshopper/how-to-npm',
        text: 'how-to-npm',
        file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md', //is it okay follow the original path?
        status: 200,
        message: 'OK',
      },
      {
        url: 'https://gi.com/stevekane/promise-it-wont-hurt',
        text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
        file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md',
        status: 404,
        txStatus: 'FAIL',
      },
]

const objLink200 = 
{
    url: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md',
}

const arrayValidated = [
    {
        url: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md',
        status: 200,
        message: 'OK'
    },
    {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'mockREADME.md',
        status: 200,
        message: 'ok'
    }]

module.exports = { MDCheck, checkStatusValue, objLink200, arrayValidated }