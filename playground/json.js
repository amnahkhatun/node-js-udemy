// var obj = {
//   name : 'amnah'
// };
//
// var stringObj = JSON.stringify(obj); //converting to string
//
// console.log(typeof stringObj);
// console.log(stringObj);

//converting the data from server to its original form string or object or array

// var personString = '{"name":"amnah", "age": 23}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);


//save a note
const fs = require('fs');

var originalNote = {
  title: "some title",
  body: "some body"
};

var originalNoteString = JSON.stringify(originalNote);//original note object to string

fs.writeFileSync('notes.json', originalNoteString);//save the value into the file notes.json


//read a note
var noteString = fs.readFileSync('notes.json'); //read the value

var note = JSON.parse(noteString);//string json to js object

console.log(typeof note);
console.log(note.title);
