// boilerplate from https://www.npmjs.com/package/json-server
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json'); // access the file correctly, ya dummy - this was the problem breaking my inspector. the result came back empty.
const middlewares = jsonServer.defaults();

// const PORT = process.env.PORT || 3001;

// data formatting using router, returned resources will be wrapped in a body property
router.render = (request, response) => {
    response.jsonp({
        results: response.locals.data,
        count: response.locals.data.length
    });
};

server.use(middlewares);
server.use(router);

//Routes
// server.get('/categories', (request, response) => {
//     const url = 'http://localhost:3000/categories'
// });

server.listen(3000, () => {
    console.log(`JSON Server is running`)
});