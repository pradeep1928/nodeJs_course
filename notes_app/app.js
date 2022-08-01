// const fs = require('fs');
// fs.appendFileSync('node.txt', "\nThis is appendFileSync command");

const validator = require("validator")
const chalk = require("chalk");

const notes = require("./notes");
const note = notes()
console.log(note)


console.log("validating email ", validator.isEmail('pradeep12@gmail.com'))
console.log("validating url ", validator.isURL('https://pradeep12@gmail.com'))
console.log(chalk.green('Hello world!'));
console.log(chalk.blue.inverse.bold('Hello world!'));