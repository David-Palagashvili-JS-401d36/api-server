'use strict';
// https://stackify.com/javascript-logging-basic-tips/

// This module executes a console.log() containing the request path, method, and the requestTime property of the request object.

module.exports = (request, response, next) => {
    console.log('__REQUEST__: ' + `${request.path}` + `${request.method}` + `${request.requestTime}`);
    next(); // exported and set it up to run at the application level for all routes
};