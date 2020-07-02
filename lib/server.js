'use strict';
// NOTE: this file will contain all of the logic for the server module.

// TODO: notate for JSdocs once proper functionality is confirmed.

// Bring in the middleware to be used by the server
const express = require('express');
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');

// TODO: Consolidate the category and product router modules into a single API router
const routerAPI = require('../routes/api-v1.js');
// const routerForCategories = require('../routes/categories.js');
// const routerForProducts = require('../routes/product.js');

const app = express();
//use the middleware
app.use(express.json());
app.use(timeStamp);
app.use(logger);

// HOME ROUTE
app.get('/', (request, response) => {
    response.send('Welcome to API-Server!');
});

// The consolidated API router instead of having separate routers for each model.
app.use('/api-v1', routerAPI);

// ROUTER FOR PRODUCTS \\
// app.use('/products', routerForProducts);

// ROUTER FOR CATEGORIES \\
// app.use('/categories', routerForCategories);

// ERROR HANDLING \\
app.use('*', error404); // Kept the 404 as the last route for all.
app.use(error500);

// exports an object with a start() method. Our server does not start on it’s own.
module.exports = {
    server: app,
    start: (port) => { // Many thanks to Garhett Morgan for helping me with this start method.
        app.listen(port, () => {
            console.log('Our server is running on port: ' + port);
        });
    }
};