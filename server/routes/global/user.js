var express = require('express');
var router = express.Router();
var TokenUtils = require('../../utils/tokenUtils');
var theModel = require('../../models/global/user.js');
var requestIp = require('request-ip');
var menu = require('../../models/global/menus.js');

router.delete('', async (req, res) => {
    try {
        await TokenUtils.destroyToken(req.db, req.headers.token);
        res.status(200).json({ status: 1})
    } catch (e) {
        res.status(200).json({ status: 0, message: e.message });
    }
})

router.post('/validate', async (req, res) => {
    try {
        var db = req.db;

        if (req.body.email && req.body.pw && req.body.tenant) {
            const data = await theModel.get(db, req.body.email.toUpperCase(), req.body.tenant.toUpperCase());
            if (data) {
                var e = TokenUtils.encrypt(req.body.pw);
                if (data.pw == e) {
                    var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
                    data.token = await TokenUtils.createToken(db, data.email.toUpperCase(), clientIp, req.body.tenant);
                    data.menu = await menu.get(db, req.body.email, req.body.tenant);

                    res.status(200).json({ status: 1, data: data });

                } else {
                    res.status(200).json({ status: 0, message: 'contraseña invalida' });
                }
            } else {
                res.status(200).json({ status: 0, message: 'el usuario no existe' });
            }
        } else {
            res.status(200).json({ status: 0, message: 'post sin data' });
        }
    } catch (e) {
        res.status(200).json({ status: 0, message: e.message });
    }
});


module.exports = router;
