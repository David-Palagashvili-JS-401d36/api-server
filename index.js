// boilerplate from https://www.npmjs.com/package/json-server
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// const PORT = process.env.PORT || 3001;

server.use(middlewares)
server.use(router)

//Routes
server.get('/categories', (request, response) => {
    const url = 'http://localhost:3000/categories'
})

server.listen(3000, () => {
  console.log(`JSON Server is running`)
});