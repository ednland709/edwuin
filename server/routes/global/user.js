var express = require('express');
var router = express.Router();
var TokenUtils = require('../../utils/tokenUtils');
var theModel = require('../../models/global/user.js');
var requestIp = require('request-ip');

router.get('', (req, res) => {
    var db = req.db;
    var userData = req.data;
    res.status(200).json({ status: 1, data: "data" });

});


router.post('/validate', async (req, res) => {
    try {
        var db = req.db;
        
        if (req.body.user && req.body.pwd && req.body.tenant) {
            const data = await theModel.get(db, req.body.user.toUpperCase(), req.body.tenant.toUpperCase());
            if (data && data.length > 0) {
                var e = TokenUtils.encrypt(req.body.pwd);
                if (data[0].pwd == e) {
                    // if user exists generate the token
                    var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
                    data.token = await TokenUtils.createToken(db, data[0].user, clientIp);
                    res.status(200).json({status: 1, data: data});
                    
                } else {
                    res.status(200).json({ status: 1, message: 'contraseña invalida' });
                }
            } else {
                res.status(200).json({ status: 1, message: 'el usuario no existe' });
            }
        } else {
            res.status(200).json({ status: 0, message: 'post sin data' });
        }
    } catch (e) {
        res.status(200).json({ status: 1, error: e.message });
    }
});


module.exports = router;
