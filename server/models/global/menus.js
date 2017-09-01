var MongoHelper = require('../../models/core/mongoHelper');

var table = {};
var obj;

//Obtenemos todos los usuarios
table.get = function (db, user, tenant, callback) {
    MongoHelper.find(db, "menu",{ user: user }, function(data){
        callback({ status: 1, data: docs });
    });
}

module.exports = table;