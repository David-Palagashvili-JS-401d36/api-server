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
router.post('/', addNewRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

// this time we're not bound by a single model, we can dynamically call these methods on any VALID models we pass in.
function fetchAll (request, response) {
    request.model.read()
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function fetchByID (request, response) {
    request.model.read(request.params.id)
    .then(result => response.send(result))
    .catch(error => response.send(error))
};

function addNewRecord (request, response) {
    request.model.create(request.body)
    .then(result => response.send(`added new ${model}: ` + result))
    .catch(error => response.send(error))
};

function updateRecord (request, response) {
    request.model.update(request.params.id, request.body)
    .then(result => response.send(`updated ${model}: ` + request.params.id))
    .catch(error => response.send(error))
};

function deleteRecord (request, response) {
    request.model.delete(request.params.id)
    .then(result => response.send(`deleted ${model}: ` + request.params.id))
    .catch(error => response.send(error))
};

// export the router instance
module.exports = router;