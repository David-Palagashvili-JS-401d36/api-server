'use strict';

const express = require('express');

/* TODO: Create a router module for the Product data type:

- Create an instance of express.Router() and export it
- Move the appropriate route definitions and route handlers from server.js here
- Redefine the definitions as route definitions (not app definitions)
- Confirm that your server works as before, but now modular
- Begin the conversion from memory data to persistent data …
- Import and initialize the appropriate Mongoose Collection (see bullet points below)
- In your handler methods, rather than change your in-memory data store, call the appropriate model methods

I have a feeling this will be very similar to how we did products
*/

// Create an instance of express.Router()
const router = express.Router();

// Import appropriate Mongoose Collection
const ProductModel = require('../lib/models/products/products.collection.js');
// initialize the model
const Product = new ProductModel();

// Appropriate route definitions with their route handlers
router.get('/', getProducts);
router.get('/:id', getProductByID);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Redefined as route handlers, rather than change our in-memory data store, I called the corresponding model methods.

function getProducts (request, response) {
    Product.read()
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function getProductByID (request, response) {
    Product.read(request.params.id)
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function addProduct (request, response) {
    Product.create(request.body)
    .then(result => response.send('added' + result))
    .catch(error => response.send(error))
};

function updateProduct (request, response) {
    Product.update(request.params.id, request.body)
    .then(result => response.send('updated' + request.params.id))
    .catch(error => response.send(error))
};

function deleteProduct (request, response) {
    Product.delete(request.params.id)
    .then(result => response.send('deleted' + request.params.id))
    .catch(error => response.send(error))
};

// export the router instance
module.exports = router;