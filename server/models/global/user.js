var MongoHelper = require('../../models/core/mongoHelper');

var table = {};

table.get = async function (db, email, tenant) {
    return await MongoHelper.findOne(db, "users", { email: email, tenant: tenant });
}

module.exports = table;