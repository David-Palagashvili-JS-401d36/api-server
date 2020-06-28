'use strict';
// NOTE: this file is “entry point” to our server:

// TODO: Update the index:
// Require the mongoose library.
// Prior to calling start() on your imported server module, it connect to Mongo, via mongoose.

// require dotenv and the mongoose library.
require('dotenv').config();
const mongoose = require('mongoose');

// reading PORT from our .env file
const PORT = process.env.PORT || 3001;

// require lib/server.js
const expServer = require('./lib/server.js');

// call the .start() method from the server with the PORT set in your environment
expServer.start(PORT);