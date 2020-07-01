// thank goodness https://expressjs.com/en/guide/writing-middleware.html
// TODO: Setup express params middleware at the top level, to run a function on the “model” parameter.

/* 
- In this middleware, dynamically require() the data model specified by the model parameter:
- Identify a valid model in the route param
- Finds the module in the file system
- Requires and instantiates it
- Makes that model available to the handler functions so - that they can still call, for example, `request.model. create()
*/

const CategoriesModel = require('../lib/models/categories/categories.collection.js');

const ProductsModel = require('../lib/models/products/products.collection.js');

function setModel(request, response, next) {
    let model = request.params.model;
    switch(model) {
        case 'categories':
            request.model = new CategoriesModel();
            next();
            break;
        case 'products':
            request.model = new ProductsModel();
            next();
            break;
        default:
            next('That model is unavailable');
            break;
    }
};

