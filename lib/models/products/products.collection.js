'use strict';

// Imports the schema and model
const schema = require('./products.schema.js');

const Model = require('../mongo.js');

// a Product class coded to work with our schema
class Product extends Model {
    constructor() {
      super(schema);
    };
};
// export our product collection module,
module.exports = Product;