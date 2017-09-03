
var MongoHelper = {};

//Obtenemos todos los usuarios
MongoHelper.insert = async function(db, collection, doc) {
    try{
        await db.collection(collection).insertOne(doc);
        return { status: 1};
    } catch(err) {
        if (!error.fatal) {
            return { status: 0, error: error };
        }
        else {
            throw error;
        }
    }
}

MongoHelper.updateOne = function (db, collection,  filter, newData, callback) {
    db.collection(collection).updateOne(filter,{$set: newData} ,function (error, docs) {
        if (error) {
            if (!error.fatal) {
                callback({ status: 0, error: error });
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

MongoHelper.find = function (db, collection,  filter, callback) {
    db.collection(collection).find(filter).toArray(function (error, docs) {
        if (error) {
            console.log('entro2');
            if (!error.fatal) {
                callback({ status: 0, error: error });
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

MongoHelper.findOP = function (db, collection,  filter, options, callback) {
    db.collection(collection)
    .find(filter, options)
    .toArray(function (error, docs) {
        if (error) {
            if (!error.fatal) {
                callback({ status: 0, error: error });
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


MongoHelper.deleteOne = function (db, collection,  filter, callback) {
    db.collection(collection).deleteOne(filter,function (error, docs) {
        if (error) {
            if (!error.fatal) {
                callback({ status: 0, error: error });
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