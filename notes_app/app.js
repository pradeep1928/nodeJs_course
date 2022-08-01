// const fs = require('fs');
// fs.appendFileSync('node.txt', "\nThis is appendFileSync command");

const validator = require("validator")

const notes = require("./notes");
const note = notes()
console.log(note)


console.log("validating email ", validator.isEmail('pradeep12@gmail.com'))
console.log("validating url ", validator.isURL('https://pradeep12@gmail.com'))

