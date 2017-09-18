
var MongoHelper = {};

//Obtenemos todos los usuarios
MongoHelper.insert = async function(db, collection, doc) {
    return await db.collection(collection).insertOne(doc);
}

MongoHelper.updateOne = async function (db, collection,  filter, newData) {
    return db.collection(collection).updateOne(filter,{$set: newData} );
}

MongoHelper.find = async function (db, collection,  filter) {
    return await db.collection(collection).find(filter).toArray();
}

MongoHelper.findOne = async function (db, collection,  filter) {
    return await db.collection(collection).findOne(filter);
}

MongoHelper.findOP = async function (db, collection,  filter, options) {
    return await db.collection(collection).find(filter, options).toArray();
}

MongoHelper.deleteOne = async function (db, collection,  filter) {
    return await db.collection(collection).deleteOne(filter);
}

MongoHelper.findOld = function (db, collection,  filter, callback) {
    db.collection(collection)
    .find(filter)
    .toArray(function (error, docs) {
        if (error) {
            if (!error.fatal) {
                callback({ status: 0, message: error.message });
                return;
            }
            else {
                throw error;
            }
        }
        else {
            callback({ status: 1, data: docs });
        }
    });
}

module.exports = MongoHelper;