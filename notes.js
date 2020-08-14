const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "get Notes ....";
};

//Adding Notes

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    if (note.title === title) {
      return true;
    }
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log(chalk.green.inverse("Added Note"));
  } else {
    console.log(chalk.red.inverse("Title already taken"));
  }
};

//Removing Notes
const removeNotes = (title) => {
  //   console.log("Hey i complete the callenge");
  const notes = loadNotes();
  const removedArray = notes.filter((note) => {
    if (note.title !== title) {
      return true;
    }
  });
  if (notes.length === removedArray.length) {
    console.log(chalk.bgRed.inverse("No! Notes Found"));
  } else {
    console.log(chalk.bgGreen.inverse("Notes Removed"));
  }

  saveNotes(removedArray);
};

//Listing Notes
const listNotes = () => {
  console.log(chalk.blue.bold.inverse("Your Notes"));
  const notes = loadNotes();
  notes.forEach((ele, ind) => {
    console.log(ele.title);
  });
};

//Reading Notes
const readNotes = (title) => {
  const notes = loadNotes();
  let note;
  for (let i = 0; i < notes.length; i++) {
    if (title === notes[i].title) {
      note = notes[i];
      break;
    }
  }
  if (note === undefined) {
    console.log(chalk.red.inverse("ERROR"));
  } else {
    console.log(chalk.yellow.inverse("Title : " + note.title));
    console.log(chalk.yellow.inverse("Body : " + note.body));
  }
};

const saveNotes = (notes) => {
  const JSONdata = JSON.stringify(notes);
  fs.writeFileSync("notes.json", JSONdata);
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync("notes.json");
    const bufferS = buffer.toString();
    const bufferJ = JSON.parse(bufferS);
    return bufferJ;
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
