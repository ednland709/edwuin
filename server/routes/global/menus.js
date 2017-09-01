var express = require('express');
var router = express.Router();
var TokenUtils = require('../../utils/tokenUtils');
var menuModel = require('../../models/global/menus.js');

//router.get('/definitionNT/:collection',TokenUtils.validateToken,  (req, res) => {
router.get('',  (req, res) => {
    /*
    var db = req.db;
*/
    var db = req.db;
    var user = 'a';
    var tenant = 'datae';

    menuModel.get(db, user, tenant, function (data) {
        res.status(200).json({ data });
    });

});

module.exports = router;
