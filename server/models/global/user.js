var MongoHelper = require('../../models/core/mongoHelper');

var table = {};
var obj;

//Obtenemos todos los usuarios
table.get = async function (db, email, tenant) {
    return await MongoHelper.findOne(db, "users", { email: email, tenant: tenant });
    //MongoHelper.find(db, "users", {user: "A"}, function(data){ console.log(data); })
}

module.exports = table;