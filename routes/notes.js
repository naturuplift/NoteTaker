// Import Router from express to handle route definitions
const notes = require('express').Router();
const fs = require('fs');

const path = require('path');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

// GET Route for notes page
// notes.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// // GET Route for homepage
// notes.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// const dbPath = path.join(__dirname, '/db/db.json');

// GET Route for retrieving notes
notes.get('/', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// POST Route for saving a new note
notes.post('/', (req, res) => {
  const newNote = { ...req.body, id: uuidv4() };

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

// DELETE Route for a specific note
notes.delete('/:id', (req, res) => {
  const noteId = req.params.id;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data).filter(note => note.id !== noteId);
    fs.writeFile(dbPath, JSON.stringify(notes, null, 2), err => {
      if (err) throw err;
      res.json({ message: 'Deleted note with id ' + noteId });
    });
  });
});

module.exports = notes;