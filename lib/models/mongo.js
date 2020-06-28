'use strict';
// https://docs.mongodb.com/manual/reference/method/db.collection.save/

class DBinterface {
    constructor(schema) {
        this.schema = schema;
    };
    // performs a find() query in our schema
    read(_id) {
        let parameter = _id ? {_id} : {};
        return this.schema.find(parameter);
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