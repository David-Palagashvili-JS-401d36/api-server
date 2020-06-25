'use strict';
// NOTE: this file will contain all of the logic for the server module.

// Bring in the middleware to be used by the server
const express = require('express');

/*
    TODO: Create routes within your server.js for both “categories” and “products”:

 - The “data” for these routes will be contained within the router itself, as an in-memory object or array of objects (your choice)

    TODO: Define CRUD routes to handle requests for both categories and products that will use this in-memory “database”:

 - app.post('/products', (req, res) => {}) … uses the object in the body of the request to create a new “record”

 - app.get('/products', (req, res) => {})

 - app.get('/products/:id', (req, res) => {})

 - app.put('/products/:id', (req, res) => {})  … uses the object in the body to replace the record with the :id specified

 - app.delete('/products/:id', (req, res) => {}) … deletes the record with the :id specified

 - … and repeat for categories
*/



// TODO: export an object with a start() method (it should not start on it’s own)