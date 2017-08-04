var express = require('express');
var router = express.Router();
var TokenUtils = require('../utils/tokenUtils');
var dynamicsModel = require('../models/dynamics/dynamics.js');

//router.get('/definitionNT/:collection',TokenUtils.validateToken,  (req, res) => {
router.get('/definitionNT/:collection',  (req, res) => {
    var collection = req.params.collection;
    var db = req.db;
    dynamicsModel.getCollectionDefinitionNT(db, collection, function (data) {
        res.status(200).json({ data });
    });

});

module.exports = router;
