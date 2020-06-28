'use strict';
// Snuck back into my 301 work for a refresher on error handling --> https://github.com/Davidoffili/city_explorer_api/blob/master/modules/errors.js

// This module sends a 404/Not-Found message as the response.

module.exports = (request, response, error) => {
    console.log('__ERROR__: ', error); // this will log and show error details
    response.status(404).send('We cannot ' + `${request.method}` + `${request.path}`); // Sends a 404 message.
}; // exported to server and set up to be “used” after our other routes