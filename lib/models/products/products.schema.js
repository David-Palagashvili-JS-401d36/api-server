'use strict';
// TODO: notate for JSdocs once proper functionality is confirmed.

//require mongoose
const mongoose = require('mongoose');

//define our data model as a Mongoose schema.
const schemaProducts = new mongoose.Schema({
    name: {type: String, required: true},
    display_name: {type: String, required: true},
    description: {type: String, required: true},
});

// exports the model within our mongoose instance
module.exports = mongoose.model('product', schemaProducts);