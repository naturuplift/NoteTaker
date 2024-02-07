# Note Taker

Your challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.

## User Story

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria

- GIVEN a note-taking application
- WHEN I open the Note Taker
  THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
  THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
  THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
- WHEN I click on the Save button
  THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
- WHEN I click on an existing note in the list in the left-hand column
  THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
- WHEN I click on the "New Note" button in the navigation at the top of the page
  THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Mock-Up

![Note Taker](assets/note-taker.gif)

## Getting Started

The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

### HTML Routes

- `GET /notes` should return the notes.html file.
- `GET *` should return the index.html file.

### API Routes

- `GET /api/notes` should read the db.json file and return all saved notes as JSON.
- `POST /api/notes` should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

## Bonus

As a bonus, see if you can add the DELETE route to the application using the following guideline:

- `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
