
var MongoHelper = {};

//Obtenemos todos los usuarios
MongoHelper.insert = function (db, collection,  doc, callback) {
    db.collection(collection).insertOne(doc,function (error, result) {
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
            callback({ status: 1});
        }
    });
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
            console.log('entro');
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