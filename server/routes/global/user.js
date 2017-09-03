var express = require('express');
var router = express.Router();
var TokenUtils = require('../../utils/tokenUtils');
var theModel = require('../../models/global/user.js');

router.post('/validate', async (req, res) => {
    var db = req.db;
    var userData = re.data;

    const data = theModel.get(db, userData.user);
    if (data) {
        if (data.pwd === TokenUtils.encrypt(userData.pwd)) {
            // if user exists generate the token
            data.token = await TokenUtils.createToken(data.user, ipAddres);
            res.status(200).json(data);
        } else {
            res.status(200).json({ status: 1, message: 'contraseña invalida' });
        }
    } else {
        res.status(200).json({ status: 1, message: 'el usuario no existe' });
    }
});

module.exports = router;
