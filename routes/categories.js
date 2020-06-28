'use strict';
const express = require('express');

// Create an instance of express.Router() and export it
const router = express.Router();

// Require our category model
const CategoryModel = require('../lib/models/categories/categories.collection.js');
// instantiate the model
const Category = new CategoryModel();

// Appropriate route definitions and route handlers from server.js, moved here:
router.post('/', );
router.get('/', );
router.get('/:id', );
router.put('/:id', );
router.delete('/:id', );

/* TODO: Create a router module for the category data type:
- Confirm that your server works as before, but now modular
- Begin the conversion from memory data to persistent data …
- Import and initialize the appropriate Mongoose Collection (see bullet points below)
- In your handler methods, rather than change your in-memory data store, call the appropriate model methods
*/

// Redefined as route definitions, not app definitions

function getCategories (request, response) {
    Category.get()
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function getCategoryByID (request, response) {
    Category.get(request.params.id)
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function addCategory (request, response) {
    Category.create(request.body)
    .then(result => response.send('added' + result))
    .catch(error => response.send(error))
};