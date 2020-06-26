'use strict';
// NOTE to TA: snagged hints from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
// Express Guide has been quite useful: https://expressjs.com/en/guide/routing.html
// PS. Paul Depew is amazing, needs to join the ranks while he's on a job hunt! The man has a way of explaining things that even salesman clown such as myself could digest the concept. This is not the first time he's gotten me unstuck.

module.exports = (request, response, next) => { // Import into our server
    let timeStamp = new Date(Date.now()); // formatted like a proper date
    request.requestTime = timeStamp; // puts the request object in a property called requestTime.
    next(); // set up to run at the application level for all routes
}