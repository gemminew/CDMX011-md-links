#!/usr/bin/env node
const yargs = require('yargs');
const mdLinks = require('../md-links');
const { validateM } = require('../md-links')
const { stats } = require('../mdlinks-modules/stats');
const chalk = require('chalk')
const log = console.log 

const path = process.argv[2];
const opt1 = process.argv[3];
const optStats = process.argv[4];

log('                                             ')
log('                      /^--^\\     /^--^\\    ')                   
log('                      \\____/     \\____/    ')                     
log('                     /      \\   /      \\    ')                   
log(chalk.magenta('Introducing...      |   MD   | |  LINKS |    '))
log('                     \\__  __/   \\__  __/   ')                    
log('|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^/ /^|^|^|')
log('| | | | | | | | | | | |  \\ \\| | |/ /| | | |')
log(chalk.yellow('#########################/ /#####\\ \\#######'))
log('| | | | | | | | | | | |  \\/| | | |\\/| | | |')
log('|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|')
log(chalk.bgWhite('                                           '))
log(chalk.cyan('Before starting, read the following index'))
log(chalk.bgWhite('                                           '))
    //require('../md-links');
const options = yargs
.option('validate', {alias: "v", describe: "Validate links contained within MD files", type: "boolean", demandOption: false})
.option('stats', {alias: "s", describe: "Check the results of the validated links", type: "boolean", default: false})
.option('help', {alias: "h", describe: "Did you forget a command? Use help to find it", type: "boolean", default: false})     
.argv

const statsOption = (options.s) ? true : false ;
const validat = (options.v) ? true : false ; 
const args = process.argv.slice(2);

mdLinks.mdLinks(path, options)
.then(data => {
    
    //console.log(typeof(data));
//    console.log(data);
    Promise.all(data).then(x => console.log(x));
    // data.forEach(link => {
    //     link.then(e => console.log(e));
    // });
})
.catch((err)=>{
    console.log(err)
});

function cliOptions(options){
  if (path == '--validate' || path == '--v' || path == 'v') {
    console.log(chalk.bold.red('Ya pase'));
  } else if (path == validat) {
    console.log(mdLinks(validateM)) 
  } else if (path == statsOption) {
    console.log(mdLinks(statsM))
  } else if (opt1 == '--validate' && path == '--stats') {
    console.log(stats());
  } else if (args.length === 3) {
    if (validat && statsOption) {
      mdLinks(args[0], { validate: true, stats: true })
        .then((res) => {
          console.log('khaaaa');
        })
      .catch((err) => console.error('\n', chalk.redBright.bold.underline(err)));
        }
      }
    }