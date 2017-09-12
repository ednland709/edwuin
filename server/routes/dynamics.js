var express = require('express');
var router = express.Router();
var TokenUtils = require('../utils/tokenUtils');
var dynamicsModel = require('../models/dynamics/dynamics.js');

router.post('', async (req, res) => {
    res.status(200).json({ status: 0, message: 'test' });
});

router.post('/list', TokenUtils.validateToken, async (req, res) => {
    try {
        var options = { "limit": req.body.limit, "skip": req.body.skip };
        var res = await dynamicsModel.getList(req.db, req.body.collection, {}, options);
        res.status(200).json(res);
    } catch (e) {
        res.status(200).json({ status: 0, message: e.message });
    }
});

router.post('/definition', async (req, res) => {
    try {
        var ret = await dynamicsModel.getCollectionDefinition(req.db, req.body.collection);
        res.status(200).json({ status: 1, data: ret });
    } catch (e) {
        res.status(200).json({ status: 0, message: e.message });
    }

});

module.exports = router;
