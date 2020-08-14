const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
const { argv } = require("yargs");

// console.log(process.argv);

yargs.version("1.1.1");

//Add Command
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Notes Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Adding Notes...");
    // console.log("Title : " + argv.title);
    // console.log("About : " + argv.body);
    notes.addNotes(argv.title, argv.body);
  },
});

//Remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Notes Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Removing Notes...");
    notes.removeNotes(argv.title);
  },
});

//List Command
yargs.command({
  command: "list",
  describe: "List the Notes",
  handler: () => {
    // console.log("Listing the Notes...");
    notes.listNotes();
  },
});

//Read Command
yargs.command({
  command: "read",
  describe: "Read the Notes",
  builder: {
    title: {
      describe: "Notes Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
