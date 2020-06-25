'use strict';
// NOTE: this file is “entry point” to our server:

// require dotenv
require('dotenv').config();

// reading PORT from our .env file
const PORT = process.env.PORT || 3001;

// require lib/server.js
const expServer = require('./lib/server.js');

// call the .start() method from the server with the PORT set in your environment
expServer.start(PORT);