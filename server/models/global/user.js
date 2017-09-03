var MongoHelper = require('../../models/core/mongoHelper');

var table = {};
var obj;

//Obtenemos todos los usuarios
table.get = function (db, data, callback) {
    MongoHelper.find(db, "menu",{ user: user }, function(data){
        callback(data);
    });
}

module.exports = table;