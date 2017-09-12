var express = require('express');
var router = express.Router();
var TokenUtils = require('../../utils/tokenUtils');
var menuModel = require('../../models/global/menus.js');

router.get('', TokenUtils.validateToken, async (req, res) => {
    try {
        return await menuModel.get(req.db, 'a', 'datae');
    } catch (e) {
        res.status(200).json({ status: 0, message: e.message });
    }
});

module.exports = router;
