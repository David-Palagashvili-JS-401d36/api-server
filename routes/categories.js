'use strict';
const express = require('express');

// Create an instance of express.Router() and export it
const router = express.Router();

// Import appropriate Mongoose Collection
const CategoryModel = require('../lib/models/categories/categories.collection.js');
// initialize the model
const Category = new CategoryModel();

// Appropriate route definitions with their route handlers
router.get('/', getCategories);
router.get('/:id', getCategoryByID);
router.post('/', addCategory);
router.put('/:id', updateCategory);
router.delete('/:id', );

/* TODO: Begin the conversion from memory data to persistent data …
- In your handler methods, rather than change your in-memory data store, call the appropriate model methods
*/

// Redefined as route handlers

function getCategories (request, response) {
    Category.read()
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function getCategoryByID (request, response) {
    Category.read(request.params.id)
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function addCategory (request, response) {
    Category.create(request.body)
    .then(result => response.send('added' + result))
    .catch(error => response.send(error))
};

function updateCategory (request, response) {
    Category.update(request.params.id, request.body)
    .then(result => response.send('updated' + request.params.id))
    .catch(error => response.send(error))
};