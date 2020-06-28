'use strict';
// NOTE: this file will contain all of the logic for the server module.

// Bring in the middleware to be used by the server
const express = require('express');
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');

// Require the category and product router modules
const routerForCategories = require('../routes/categories.js');
const routerForProducts = require('../routes/product.js');

const app = express();
//use the middleware
app.use(express.json());
app.use(timeStamp);
app.use(logger);
// app.use(error404);
// app.use(error500);

// app.use() each them in your app so that your routes will respond.
app.use('/categories', routerForCategories);
app.use('/products', routerForProducts);

// The “data” for our routes will be contained within the router itself, as arrays of objects
const products = [];
const categories = [];

// ==================================== ROUTES FOR PRODUCTS ============================================ \\

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
    let productFound = false; //set to false as default until verified.

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

app.put('/products/:id', (request, response) => { // uses the object in the body to replace the record with the :id specified
    const requestID = parseInt(request.params.id);
    let productFound = false; //set to false as default until verified.

    products.forEach(object => {
        if (object.id === requestID) {
            productFound = true; // if the ID numbers match, set it to true,
            object = request.body;
            response.send('Product record' + requestID + 'has been updated.');
        };
    });
    if (productFound === false) {
        response.send('Sorry, we could not find this product.');
    };
});

app.delete('/products/:id', (request, response) => { // deletes the record with the :id specified
    const requestID = parseInt(request.params.id);
    let productFound = false; // set to false as default until verified 

    products.forEach(object => {
        if (object.id === requestID) {
            productFound = true; // if the ID numbers match, set it to true,
            products.slice(requestID - 1); // 
            response.send('Product record' + requestID + 'has been deleted.');
        };
    });
    if (productFound === false) { // we don't want to delete something by accident
        response.send('Sorry, we could not find this product.');
    };
});

// ==================================== ROUTES FOR CATEGORIES ============================================ \\

app.post('/categories', (request, response) => { // uses the object in the body of the request to create a new “record”
    categories.push(request.body);
    response.send(request.body);
});
// get all category data
app.get('/categories', (request, response) => {
    response.send(categories);
});
// get by ID
app.get('/categories/:id', (request, response) => {
    const requestID = parseInt(request.params.id); //converts that nasty string into an ID number we can use
    let categoryFound = false; //set to false as default until verified.

    categories.forEach(object => {
        if (object.id === requestID) {
            categoryFound = true; // if the ID numbers match, set it to true,
            response.send(object); // then you have the right category, so send it.
        };
    });
    if (categoryFound === false) {
        response.send('Sorry, we could not find this category.');
    };
});

app.put('/categories/:id', (request, response) => { // uses the object in the body to replace the record with the :id specified
    const requestID = parseInt(request.params.id);
    let categoryFound = false; //set to false as default until verified.

    categories.forEach(object => {
        if (object.id === requestID) {
            categoryFound = true; // if the ID numbers match, set it to true,
            object = request.body;
            response.send('Category' + requestID + 'has been updated.');
        };
    });
    if (categoryFound === false) {
        response.send('Sorry, we could not find this category.');
    };
});

app.delete('/categories/:id', (request, response) => { // deletes the record with the :id specified
    const requestID = parseInt(request.params.id);
    let categoryFound = false; // set to false as default until verified 

    categories.forEach(object => {
        if (object.id === requestID) {
            categoryFound = true; // if the ID numbers match, set it to true,
            categories.slice(requestID - 1); // 
            response.send('Category' + requestID + 'has been deleted.');
        };
    });
    if (categoryFound === false) { // we don't want to delete something by accident
        response.send('Sorry, we could not find this category.');
    };
});

// exports an object with a start() method. Our server does not start on it’s own.

module.exports = {
    server: app,
    start: (port) => { // Many thanks to Garhett Morgan for helping me with this start method.
        app.listen(port, () => {
            console.log('Our server is running on port: ' + port);
        });
    }
};