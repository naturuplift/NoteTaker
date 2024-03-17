// Include packages needed for this application
const fs = require('fs');
const util = require('util');

// Concept taken from lesson 22 STU Modular Routing
// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        fs.writeFile(file, JSON.stringify(parsedData, null, 4), (writeErr) => {
          if (writeErr) {
            console.error(writeErr);
            reject(writeErr);
          } else {
            resolve();
          }
        });
      }
    });
  });
};
/**
 * Function to delete a note from a file by its id.
 * @param {string} id The id of the note to delete.
 * @param {string} file The path to the file from which to delete the note.
 * @returns {Promise<void>} A promise that resolves when the note is deleted.
 */
const deleteNote = (id, file) => {
    return readFromFile(file, 'utf8')
      .then((data) => {
        let notes = JSON.parse(data);
        // Filter out the note with the given id
        notes = notes.filter((note) => note.id !== id);
        // Write the filtered notes back to the file
        return writeToFile(file, notes);
      })
      .catch((err) => console.error(err));
  };

module.exports = { readFromFile, writeToFile, readAndAppend, deleteNote };