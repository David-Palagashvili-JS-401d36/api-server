'use strict';
// NOTE to TA: I relied heavily on the jest docs, no way I could retain everything from the lecture. line 17 was something I found halfway down the page --> https://jestjs.io/docs/en/jest-object

// require testing tools
const superGoose = require('cf-supergoose');
const server = require('../lib/server.js');

// assign a variable to expect an express server. Allows us to easily test our server without having to start it.
const mockRoute = superGoose.server(server.server);

// create a mock function that tracks calls to console[log]. The chained method allows us to overwrite the original function.
jest.spyOn(console, 'log').mockImplementation();

// test each CRUD operation:

describe('testing api-server', () => {
    // test for GET route
    it('should be able to respond to the GET route for products', () => {
        return mockRoute.get('/products')
        .then(results => {
            expect(results.body.length).toBe(0);
        });
    });
    // test for POST route
    it('should be able to respond to the POST route for products', () => {
        const sampleProduct = {id: 2, name: 'product 2'};
        return mockRoute.get('/products')
        .send(sampleProduct)
        .then(results => {
            expect(results.body).toStrictEqual(sampleProduct);
        });
    });
});