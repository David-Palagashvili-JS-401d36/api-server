'use strict';
// TODO: consolidate this entire route file into api-v1.js, our powerful api router.

const express = require('express');

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