var express = require('express');
var router = express.Router();
var TokenUtils = require('../utils/tokenUtils');
var dynamicsModel = require('../models/dynamics/dynamics.js');

//router.get('/definitionNT/:collection',TokenUtils.validateToken,  (req, res) => {
    router.post('',  (req, res) => {
        res.status(200).json( {status:0, error: 'not implemented yet'} );
        
    });
    

router.post('/list',  (req, res) => {
    var db = req.db;
    var options = {"limit": req.body.limit, "skip": req.body.skip};
    var collection = req.body.collection;

    dynamicsModel.getList(db, collection, {}, options, function (data) {
        res.status(200).json( data );
    });
});

router.get('/definitionNT/:collection',  (req, res) => {
    var collection = req.params.collection;
    var db = req.db;
    dynamicsModel.getCollectionDefinitionNT(db, collection, function (data) {
        res.status(200).json({ data });
    });
});


module.exports = router;
