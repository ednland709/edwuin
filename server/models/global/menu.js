
var table = {};
var obj;


//Obtenemos todos los usuarios
table.get = function (user, tenant, callback) {
    db.collection("menu").find({ user: user }).toArray(function (error, docs) {
        if (error) {
            if (!error.fatal) {
                callback({ status: 0, error: error });
                return;
            }
            else {
                throw error;
            }
        }
        else {
            console.dir(docs);
            callback({ status: 1, data: docs });
        }
    });
}

module.exports = table;