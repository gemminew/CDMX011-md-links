const MDCheck = [
["C:\Projects\CDMX011-md-links\CDMX011-md-links\README.md"], []
]
const checkStatusValue = [
    {
        href: 'https://github.com/workshopper/how-to-npm',
        text: 'how-to-npm',
        file: 'C:\Projects\CDMX011-md-links\CDMX011-md-links\README.md', //is it okay follow the original path?
        status: 200,
        txStatus: 'OK',
      },
      {
        href: 'https://gi.com/stevekane/promise-it-wont-hurt',
        text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
        file: 'C:\Projects\CDMX011-md-links\CDMX011-md-links\README.md',
        status: 404,
        txStatus: 'FAIL',
      },
]
module.exports = { MDCheck }