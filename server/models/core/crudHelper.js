
var crudHelper = {};

//Obtenemos todos los usuarios
crudHelper.insert = function (collection,  obeject, callback) {
    db.collection(collection).find({ collection: collection }).toArray(function (error, docs) {
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
            console.log("entro");
            console.dir(docs);
            callback({ status: 1, data: docs });
        }
    });
}

crudHelper.updateOne = function (collection,  filter, newData, callback) {
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
            console.log("entro");
            console.dir(docs);
            callback({ status: 1, data: docs });
        }
    });
}

crudHelper.find = function (collection,  filter, callback) {
    db.collection(collection).find(filter).toArray(function (error, docs) {
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
            console.log("entro");
            console.dir(docs);
            callback({ status: 1, data: docs });
        }
    });
}

crudHelper.deleteOne = function (collection,  filter, callback) {
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
            console.log("entro");
            console.dir(docs);
            callback({ status: 1, data: docs });
        }
    });
}


module.exports = crudHelper;