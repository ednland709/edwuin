var express = require('express');
var router = express.Router();
var TokenUtils = require('../../utils/tokenUtils');
var theModel = require('../../models/global/user.js');
var requestIp = require('request-ip');
var menu = require('../../models/global/menu');

router.get('', (req, res) => {
    var db = req.db;
    var userData = req.data;
    res.status(200).json({ status: 1, data: "data" });

});


router.post('/validate', async (req, res) => {
    try {
        var db = req.db;
        
        if (req.body.email && req.body.pw && req.body.tenant) {
            const data = await theModel.get(db, req.body.email.toUpperCase(), req.body.tenant.toUpperCase());
            if (data && data.length > 0) {
                var e = TokenUtils.encrypt(req.body.pw);
                if (data[0].pw == e) {
                    var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
                    data.token = await TokenUtils.createToken(db, data[0].email.toUpperCase(), clientIp);
                    data.menu = await menu.get(db, req.body.email, req.body.tenant);
                    
                    res.status(200).json({status: 1, data: data});
                    
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
