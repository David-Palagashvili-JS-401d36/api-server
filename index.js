'use strict';
// NOTE: this file is “entry point” to our server:

// TODO: Update the index:

// Prior to calling start() on your imported server module, it connect to Mongo, via mongoose.

// require dotenv and the mongoose library.
require('dotenv').config();
const mongoose = require('mongoose');

// reading PORT from our .env file
const PORT = process.env.PORT || 3001;

// require lib/server.js
const expServer = require('./lib/server.js');

// connect mongo database, open a default mongoose connection
mongoose.connect(process.env.MONGODB_ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// call the .start() method from the server with the PORT set in your environment
expServer.start(PORT);