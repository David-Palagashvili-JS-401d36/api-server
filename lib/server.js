'use strict';
// NOTE: this file will contain all of the logic for the server module.

// Bring in the middleware to be used by the server
const express = require('express');
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');

//express essentials
const app = express();

//use middleware
app.use(express.json());
app.use(timeStamp);
app.use(logger);

// The “data” for our routes will be contained within the router itself, as arrays of objects
const products = [];
const categories = [];
/*
    TODO: Define CRUD routes to handle requests for both categories and products that will use this in-memory “database”:

 - 

 - app.put('/products/:id', (req, res) => {})  … uses the object in the body to replace the record with the :id specified

 - app.delete('/products/:id', (req, res) => {}) … deletes the record with the :id specified

 - … and repeat for categories
*/

// Routes for Products

app.post('/products', (request, response) => { // uses the object in the body of the request to create a new “record”
    products.push(request.body);
    response.send(request.body);
});
// get all product data
app.get('/products', (request, response) => {
    response.send(products);
});
// get by ID
app.get('/products/:id', (request, response) => {
    const requestID = parseInt(request.params.id); //converts that nasty string into an ID number we can use
    let productFound = false; //set to false as default.
    products.forEach(object => {
        if (object.id === requestID) {
            productFound = true; // if the ID numbers match, set it to true,
            response.send(object); // then you have the right product, so send it.
        };
    });
    if (productFound === false) {
        response.send('Sorry, we could not find this product.');
    };
});


// TODO: export an object with a start() method (it should not start on it’s own)