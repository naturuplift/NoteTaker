// Import Router from express to handle route definitions
const router = require('express').Router();

// Import routes for notes
const notesRoutes = require('./notes');

// Register notes route to be served under '/notes' path
router.use('/notes', notesRoutes);

// Export the configured router to be used by main application
module.exports = router;