'use strict';

/* TODO: 
The collection file should be a class that:

- Exports a class with CRUD methods, coded to work with your schema
- read() performs a find() query in your schema
- create() performs a save() query in your schema for a new record
- update() performs a findOneByIdAndUpdate() operation in your schema for an existing record
- delete() performs a findOneByIdAndDelete() in your schema for a new record
*/
// Imports the schema and DB
const schema = require('./products.schema.js');

const Model = require('../mongo.js');

// a class with CRUD methods, coded to work with our schema
class Product extends Model {
    constructor() {
      super(schema);
    }
};
// export our collection module,
module.exports = Product;