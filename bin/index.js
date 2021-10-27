#!/usr/bin/env node

    console.log('welcome')

    require('../md-links');
/*     const args = minimist(process.argv.slice(2))
  
    let cmd = args._[0] || 'help'
  
    if (args.version || args.v) {
      cmd = 'version'
    }
  
    if (args.help || args.h) {
      cmd = 'help'
    }
  
    switch (cmd) {
      case 'validate':
        require('./md-links-modules/validate')(args)
        break
  
      case 'stats':
        require('./md-links-modules/stats')(args)
        break
  
      default:
        error(`"${cmd}" is not a valid command!`, true)
        break
    } */