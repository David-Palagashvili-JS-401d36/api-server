'use strict';

class DBinterface {
    constructor(schema) {
        this.schema = schema;
    }
    // pass in _id as the parameter
    get(_id) {
        let parameter = _id ? {_id} : {}; // if we have id, encapsulate, else set search param as empty object
        return this.schema.find(parameter);
    }
    // https://docs.mongodb.com/manual/reference/method/db.collection.save/
    create(data) {
        let newRecord = new this.schema(data);
        return newRecord.save(newRecord);
    }
    // https://kb.objectrocket.com/mongo-db/how-to-use-the-mongoose-findbyidandupdate-method-924
    update(_id, data) {
        return this.schema.findByIdAndUpdate(_id, data);
    }
    delete(_id) {
        return this.schema.findByIdAndDelete(_id, data);
    }
};

// export our mongo interface module
module.exports = MongoInterface;