const yargs = require("yargs");
const notes = require("./notes");
const fs = require('fs');

// const validator = require("validator")
// const chalk = require("chalk");

// console.log("validating email ", validator.isEmail('pradeep12@gmail.com'))
// console.log("validating url ", validator.isURL('https://pradeep12@gmail.com'))
// console.log(chalk.green('Hello world!'));
// console.log(chalk.blue.inverse.bold('Hello world!'));

// console.log(process.argv[2])

// const command = process.argv[2];

// if (command === 'add') {
//     console.log("adding the notes")
// } else if (command === 'remove') {
//     console.log("removing the notes")
// }

// Customize yargs version
yargs.version("1.1.0");

// Create add command using yargs
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
        describe: 'note body',
        demandOption: true,
        type: 'string'
    }
  },

  handler (argv) {
    notes.addNote(argv.title, argv.body)
  },
});

// Create remove command using yargs
yargs.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
        describe: "note title",
        demandOption: true,
        type: "string",
      },
    },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create read command using yargs
yargs.command({
  command: "read",
  describe: "read a new note",
  handler (argv) {
    console.log('reading the notes');
  },
});

// console.log(yargs.argv);
yargs.parse()
