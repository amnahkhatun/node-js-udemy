
const fs = require('fs');

//function to fetch notes

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes_data.json');
    return JSON.parse(noteString);
  } catch (e){
return [];
  }
};
//function to save notes
var saveNotes = (notesArray) => {
fs.writeFileSync('notes_data.json', JSON.stringify(notesArray) );
};



var addNote = (title, body) => {
  var notesArray = fetchNotes();
  var noteSingle = {
    title,                 //title:title, since both are same name we can only write one
    body
  };



//checking for duplicates

// var duplicateNotes = notes.filter((note) => {
//   return note.title === title;
// });
//or in one duplicateNotes

var duplicateNotes = notesArray.filter((noteSingle) => noteSingle.title === title);
  if (duplicateNotes.length === 0){
    notesArray.push(noteSingle);

  saveNotes(notesArray);
return noteSingle;
  }

};



var getAll = (title, body) => {
return fetchNotes();
};



var getNote = (title) => {
  var notesArray = fetchNotes();
  var filteredNotes = notesArray.filter((noteSingle) => noteSingle.title === title);
  return filteredNotes[0];
};



var removeAll = (title) => {
  var notesArray = fetchNotes();

  var removeNotes = notesArray.filter((noteSingle) => noteSingle.title !== title);
saveNotes(removeNotes);

return notesArray.length !== removeNotes.length; //checking if the returned value exists
};

var noteLog = (noteSingle) => {
  debugger;
  console.log('---');
  console.log(`Title: ${noteSingle.title}`);
  console.log(`Body: ${noteSingle.body}`);
};

module.exports =  {
  addNote,
  getAll,
  getNote,
  removeAll,
  noteLog
};
