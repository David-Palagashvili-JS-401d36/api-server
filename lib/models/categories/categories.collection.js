'use strict';
// TODO: set up a category class that extends model from mongo
// Imports the schema and model
const schema = require('./categories.schema.js');

const Model = require('../mongo.js');

// a Category class coded to work with our schema
class Category extends Model {
    constructor() {
      super(schema);
    };
};
// export our category collection module,
module.exports = Category;