'use strict';

/* TODO: 
The collection file should be a class that:
- read() performs a find() query in your schema
- create() performs a save() query in your schema for a new record
- update() performs a findOneByIdAndUpdate() operation in your schema for an existing record
- delete() performs a findOneByIdAndDelete() in your schema for a new record
*/

// Imports the schema and model
const schema = require('./categories.schema.js');

const Model = require('../mongo.js');

// a Category class with CRUD methods, coded to work with our schema
class Category extends Model {
    constructor() {
      super(schema);
    };
};
// export our category collection module,
module.exports = Category;