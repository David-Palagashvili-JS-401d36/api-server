'use strict';
const express = require('express');

// Create an instance of express.Router()
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
router.delete('/:id', deleteCategory);

// Redefined as route handlers, rather than change our in-memory data store, I called the corresponding model methods.

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

function deleteCategory (request, response) {
    Category.delete(request.params.id)
    .then(result => response.send('deleted' + request.params.id))
    .catch(error => response.send(error))
};

// export the router instance
module.exports = router;