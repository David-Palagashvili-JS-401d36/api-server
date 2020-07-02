'use strict';
// https://docs.mongodb.com/manual/reference/method/db.collection.save/

// TODO: notate for JSdocs once proper functionality is confirmed.

class DBinterface {
    constructor(schema) {
        this.schema = schema;
    };
    // performs a find() query in our schema based on a search parameter
    read(_id) {
        let parameter = _id ? {_id} : {};
        return this.schema.find(parameter)
        .then(result => {
            let refined = {
                results: result,
                count: result.length
            }// returns an object containing count, and a results[] array
            return refined;
        }).catch(error => console.log(error));
    };
    // performs a save() query in our schema for a new record
    create(data) {
        let newRecord = new this.schema(data);
        return newRecord.save(newRecord);
    };
    // performs a findOneByIdAndUpdate() operation in your schema for an existing record
    update(_id, data) {
        return this.schema.findByIdAndUpdate(_id, data);
    };
    // performs a findOneByIdAndDelete() in your schema for a new record
    delete(_id) {
        return this.schema.findByIdAndDelete(_id);
    };
};

// export our mongo interface module
module.exports = DBinterface;