const express = require('express');
// TODO: notate for JSdocs once proper functionality is confirmed.
// TODO: Create a new generic “api” router module. Model this after one of your other working routes.

const router = express.Router();
// bring in our model middleware
const setModel = require('../middleware/model.js');
// set router parameters, based on our models.
router.param('model', setModel);
// Modeled this after our other working routes.
router.get('/', fetchAll);
router.get('/:id', fetchByID);
router.post('/', addCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
// this time we're not bound to a single model, we can dynamically call these methods any VALID models we pass in.
function fetchAll (request, response) {
    request.model.read()
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function fetchByID (request, response) {
    Category.read(request.params.id)
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function add (request, response) {
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
