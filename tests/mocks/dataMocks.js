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

const status200 = 
{
    url: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md',
}

const status404 = 
{
    url: 'https://gi.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
    file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md',
  }

const validated = [
    {
        url: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md',
        status: 200,
        message: 'OK'
    },
    {
        url: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'mockREADME.md',
        status: 200,
        message: 'OK'
    },

    {
        url: 'https://gi.com/stevekane/promise-it-wont-hurt',
        text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
        file: 'C:\\Projects\\CDMX011-md-links\\CDMX011-md-links\\README.md',
        status: 404,
        message: "FAIL"
      },
]
    const resultArrayValidated = {
        'Total': 2,
        'Unique': 2,
        'Broken': 0
    }

module.exports = { MDCheck, checkStatusValue, status200, status404, validated, resultArrayValidated }