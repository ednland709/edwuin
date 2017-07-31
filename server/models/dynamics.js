/*
//Importamos los datos de la conexión
var conn = require('./connection');
var mysql = require('mysql');
var table = {};
var obj;

//get definition of table
table.getDefinition = function (table, callback) {
    //get the especific definition and remove the sql sentence
    var fs = require('dinamics/' + table + '.js');

    fs.readFile('file', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
    });
    
    callback(null, obj);
}

//Obtenemos todos los usuarios
table.getAll = function (callback, tenant, table) {
    conn.database = tenant;
    connection = mysql.createConnection(conn);

    if (connection) {
        //get the sentence for the table
        connection.query(obj.list, function (error, rows) {
            if (error) {
                throw error;
            }
            else {
                callback(null, rows);
            }
        });
    }
}



module.exports = table;
*/