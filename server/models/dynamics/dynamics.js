var table = {};
var obj;

//Obtenemos todos los usuarios
table.getCollectionDefinitionNT = function (db, collection, callback) {
    db.collection("collectiondef").find({ collection: collection }).toArray(function (error, docs) {
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

module.exports = table;