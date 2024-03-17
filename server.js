// Import Router from express to handle route definitions
const express = require('express');
// Imports the routing files from ./routes directory
const routes = require('./routes/index.js');
// add path module to transform file paths
const path = require('path');


// initializes a new instance of the Express application
const app = express();
// set port the server will listen to
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
// Serve static files
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Wildcard route to direct users to a Index page
app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Start server
app.listen(PORT, err => {
	if (err) {
		return console.log("Error", err);
	}
	console.log(`Listening on port ${PORT}`);
});