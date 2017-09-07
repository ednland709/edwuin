var mysql = require('mysql');
var pool = require('../poolMysql');

var con_cuentas = {};

con_cuentas.getAll = function (tenant, callback) {
    pool.connect(tenant);
    pool.con.getConnection(function (err, connection) {
        var sqlstr = 'SELECT * FROM con_cuentas';
        connection.query(sqlstr, function (error, rows) {
            connection.release();
            if (error) {
                if (!error.fatal) {
                    callback({ status: 0, message: error.message });
                    return;
                }
                else {
                    throw error;
                }
            }
            else {
                callback({ status: 1, data: rows });
            }
        });
    });
}

con_cuentas.get = function (cuenta, callback) {
    pool.connect(tenant);
    pool.con.getConnection(function (err, connection) {
        var sql = "SELECT * FROM con_cuentas WHERE con_cuentas_codigo = " + connection.escape(cuenta);
        connection.query(sql, function (error, row) {
            if (error) {
                if (!error.fatal) {
                    callback({ status: 0, message: error.message });
                    return;
                }
                else {
                    throw error;
                }
            }
            else {
                callback({ status: 1, data: row });
            }
        });
    });
}



module.exports = con_cuentas;