#!/usr/bin/env node

let fs = require('fs');
let program = require('commander');
let Jimp = require('jimp');
let chalk = require('chalk');

program
  .version('0.1.0', '-v, --version')
  .option('-w | --width <n>', 'Specify Width', parseInt)
  .option('-h | --height <n>', 'Specify Height', parseInt)
  .option('-q | --quality <n>', 'Specify Quality', parseInt)
  .parse(process.argv);

let
  width = program.width,
  height = program.height,
  quality = program.quality,
  newDirectory = `${width}x${height}-${quality}`,
  pattern = /.(jpe?g|png)/i;

console.log(chalk.magentaBright(`Hentamine Imp`));
console.log(chalk.magentaBright('v0.1.0'));

fs.readdir('./', function (err, items) {
  items.forEach((item) => {  
    if (pattern.test(item)) {
      Jimp.read(item)
        .then(image => {
          image
            .resize(width, height)
            .quality(quality)
            .write(`${newDirectory}/${item}`);
          console.log(`[${chalk.green("Success")}] ${item}`);
        })
        
        .catch(err => {
          console.error(chalk.red(err));
        });
    }
  })
});