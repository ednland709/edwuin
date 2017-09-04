var jwt = require('jwt-simple');
var config = require('../config');
var moment = require('moment');
var MongoHelper = require('../models/core/mongoHelper');

var TokenUtils = {};

TokenUtils.createToken = async function (db, userId, ipAddres) {
    //validate that a session it's not created before
    var sessionInBd = await MongoHelper.find(db, "sessions", { sub: userId });
    var payload = {};
    payload = {
        sub: userId,
        iat: new Date(),
        exp: new Date(new Date().getTime() + 20 * 60 * 1000),
        ip: ipAddres,
        token: jwt.encode(payload, config.TOKEN_SECRET)
    };
    
    if (sessionInBd && sessionInBd.length > 0) {
        var minutesToNow = ( new Date().getTime() - sessionInBd[0].exp.getTime()) / (60 *1000);

        if (minutesToNow > 20) {
            await MongoHelper.insert(db, "sessionhistory", sessionInBd[0]);
            await MongoHelper.deleteOne(db, "sessions", { sub: sessionInBd[0].sub });
            await MongoHelper.insert(db, "sessions", payload);
        }
        else {
            if (sessionInBd[0].ip !== ipAddres) {
                return { status: 0, message: 'Hay otra session iniciada para este usuario, cierre session en el otro equipo o espere aprox 20 minutos' };
            } else {
                payload = sessionInBd[0];
                payload.exp = new Date(new Date().getTime() + 20 * 60 * 1000);
                await MongoHelper.updateOne (db, "session",  {sub: payload.sub}, payload);
            }
        }
    } else {
        await MongoHelper.insert(db, "sessions", payload);
    }
    return payload.token;
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

TokenUtils.encrypt = function ( value ) {
    return jwt.encode(value, config.TOKEN_SECRET);
}

module.exports = TokenUtils;