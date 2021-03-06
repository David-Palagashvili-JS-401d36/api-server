'use strict';

//require mongoose
const mongoose = require('mongoose');

//define our data model as a Mongoose schema.
const schemaCategories = new mongoose.Schema({
    name: {type: String, required: true},
    display_name: {type: String, required: true},
    description: {type: String, required: true},
});

// exports the model within our mongoose instance
module.exports = mongoose.model('product', schemaCategories);