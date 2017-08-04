var jwt = require('jwt-simple');
var config = require('../config');
var moment = require('moment');
var MongoHelper = require('../models/core/mongoHelper');

var TokenUtils = {};

TokenUtils.createToken = function (userId, ipAddres, callback) {
    //validate that a session it's not created before
    var sessionInBd = MongoHelper.find("sessions", { sub: userId }, function (res) {
        if (res.status === 1 && res.data != undefined) {
            var ms = res.data.exp.diff(moment().unix());
            var d = moment.duration(ms);
            var minutesToNow = d.asMinutes();

            if (minutesToNow > 20) {
                MongoHelper.deleteOne("sessions", { sub: payload.sub }, function (res) { });
            }
            else {
                if (res.data.ip !== ipAddres) {
                    callback({ status: 0, message: 'Hay otra session iniciada para este usuario, cierre session en el otro equipo o espere aprox 20 minutos' })
                }
            }
        }
    });

    var payload = {
        sub: userId,
        iat: moment().unix(),
        exp: moment().add(5, "minutes").unix(),
        ip: ipAddres
    };

    payload.token = jwt.encode(payload, config.TOKEN_SECRET);
    //insert session data
    MongoHelper.insert("sessions", payload, function (res) {
        callback(res);
    });
};

TokenUtils.validateToken = function (req, res, next) {
    if (!req.headers.token) {
        return res
            .status(200)
            .json({ status: 0, message: "Solicitud sin token" });
    }

    var payload = {};
    try {
        var tokenEncoded = jwt.decode(req.headers['token'], config.TOKEN_SECRET);
        payloadF = jwt.decode(tokenEncoded, config.TOKEN_SECRET);
    }
    catch(error){
        return res
            .status(200)
            .json({ status: 0, message: "Token invalido" });
    }

    //validate ip addres
    var currentIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (payload.ip !== currentIp) {
        return res
            .status(200)
            .send({ status: 0, message: "El token es invalido" });
    }

    var ms = payload.exp.diff(moment().unix());
    var d = moment.duration(ms);
    var minutesToNow = d.asMinutes();


    if (minutesToNow > 0) {
        if (minutesToNow > 20) {
            //droop session
            MongoHelper.deleteOne("sessions", { sub: payload.sub }, function (res) {
                return res
                    .status(200)
                    .send({ status: 0, message: "El token ha expirado" });
            });
        }
        else {
            //renew the token
            MongoHelper.deleteOne("sessions", { sub: payload.sub, ip: payload.ip }, function (res) {
                this.createToken(payload.sub, currentIp, function (res) {
                    if (res === 0) {
                        return res.status(200).send(res);
                    }
                });
            });
        }
    }

    req.user = payload.sub;
    next();
}

TokenUtils.destroyToken = function (tokenEncoded) {
    var payload = jwt.decode(tokenEncoded, config.TOKEN_SECRET);

    MongoHelper.deleteOne("sessions", { sub: payload.sub }, function (res) {
    });
}

module.exports = TokenUtils;