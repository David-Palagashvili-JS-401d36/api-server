'use strict';

// This module sends a 500/Server Error message as the response (does not call .next())

module.exports = (request, response, error) => {
    console.log('__ERROR__: ', error); // this will log and show error details
    response.status(500).send('Well now you\'ve done it! There\'s something wrong with the server.'); // Sends a 500 message.
}; // exported to server and set up to be “used” as the last route