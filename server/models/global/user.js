var MongoHelper = require('../../models/core/mongoHelper');

var table = {};
var obj;

//Obtenemos todos los usuarios
table.get = async function (db, user, tenant) {
    return await MongoHelper.find(db, "users",{ user: user, tenant : tenant });
    //MongoHelper.find(db, "users", {user: "A"}, function(data){ console.log(data); })
}

module.exports = table;