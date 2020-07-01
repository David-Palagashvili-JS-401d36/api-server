// thank goodness https://expressjs.com/en/guide/writing-middleware.html

// TODO: notate for JSdocs once proper functionality is confirmed.

// Finds the both modules in the file system
const CategoriesModel = require('../lib/models/categories/categories.collection.js');
// Requires them.
const ProductsModel = require('../lib/models/products/products.collection.js');

function setModel(request, response, next) {
    let model = request.params.model; // Makes that model available to the handler functions
    switch(model) { // Identify a valid model in the route param
        case 'categories':
            request.model = new CategoriesModel(); //instantiates each
            next();
            break;
        case 'products':
            request.model = new ProductsModel();
            next();
            break;
        default:
            next('That model does\'t exist!'); // to account for typos
            break;
    }
};
// export as module to be used as middleware.
module.exports = setModel;