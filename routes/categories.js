'use strict';

const express = require('express');

// Create an instance of express.Router() and export it
const router = express.Router();

// Require our category model
const CategoryModel = require('../lib/models/categories/categories.collection.js');
// instantiate the model
const Category = new CategoryModel();

// Appropriate route definitions and route handlers from server.js, moved here:
router.post('/', addCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
/* TODO: Create a router module for the category data type:

- Redefine the definitions as route definitions (not app definitions)
- Confirm that your server works as before, but now modular
- Begin the conversion from memory data to persistent data …
- Import and initialize the appropriate Mongoose Collection (see bullet points below)
- In your handler methods, rather than change your in-memory data store, call the appropriate model methods

*/