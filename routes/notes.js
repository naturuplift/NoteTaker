// Import Router from express to handle route definitions
const notes = require('express').Router();
// to generate unique IDs
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, deleteNote } = require('../helpers/fsUtils');

// path for file to store notes
const dbPath = './db/db.json';

// GET Route for retrieving notes
notes.get('/', (req, res) => {
  readFromFile(dbPath)
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => res.error('Error reading notes: ', err));
});

// POST Route for saving a new note
notes.post('/', (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = { title, text, id: uuidv4() };
    
    readAndAppend(newNote, dbPath)
      .then(() => res.json(newNote))
      .catch((err) => res.error('Error saving note: ', err));
  } else {
    res.error('Error: Missing title or text for the note.');
  }
});

// DELETE Route for a specific note
notes.delete('/:id', (req, res) => {
  const { id } = req.params;

  deleteNote(id, dbPath)
    .then(() => res.json({ message: `Note with id ${id} deleted` }))
    .catch((err) => res.error('Error deleting note: ', err));
});

module.exports = notes;