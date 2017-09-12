var MongoHelper = require('../../models/core/mongoHelper');

var table = {};

//Obtenemos todos los usuarios
table.getCollectionDefinition = async function (db, pcollection) {
    //var res = await MongoHelper.findOne(db, 'collectiondef', { collection: pcollection });
    return await MongoHelper.findOne(db, "collectiondef", { collection: pcollection });
}

table.getList = async function (db, collection, filter, options) {
    return await MongoHelper.findOP(db, collection, filter, options);
}
module.exports = table;