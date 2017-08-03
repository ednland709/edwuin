var express = require('express');
var router = express.Router();

var dynamicsModel = require('../models/dynamics/dynamics.js');

router.get('/definitionNT/:collection', (req, res) => {
    //var tenant = req.headers['tenant'];
    var collection = req.params.collection;
    var db = req.db;
    dynamicsModel.getCollectionDefinitionNT(db, collection, function (data) {
        res.status(200).json({ data });
    });

});

module.exports = router;
