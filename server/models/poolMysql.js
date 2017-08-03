var conn = require('./connectionMysql');
var mysql = require('mysql');

var pool = {};
var con;

pool.connect = function (tenant) {
  conn.database = tenant;
  this.con = mysql.createPool(conn);

};

module.exports = pool;