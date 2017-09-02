var MongoHelper = require('../../models/core/mongoHelper');

var table = {};
var obj;

//Obtenemos todos los usuarios
table.getCollectionDefinitionNT = function (db, collection, callback) {
    MongoHelper.find(db, 'collectiondef', { collection: collection } , function(data){
        callback(data);
    });
}

table.getList = function (db, collection, filter, options, callback) {
    MongoHelper.findOP(db, collection, filter, options, function(data){
        callback(data);
    });
}
module.exports = table;