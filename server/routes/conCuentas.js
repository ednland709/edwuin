var express = require('express');
var router = express.Router();

var conCuentasModel = require('../models/contabilidad/con_cuentas');

router.get('/', (req, res) => {
  var tenant = req.headers['tenant'];
  conCuentasModel.getAll(tenant, function (data) {
    res.status(200).json(data);
  });
});

router.get('/Get/:cuenta', (req, res) => {
  try {
    var cuenta = req.params.cuenta;
    conCuentasModel.get(cuenta, function (data) {
      res.status(200).json({status: 1, data: data});
    })
      ;
  }
  catch (err) {
    res.status(200).json({code: 1, error: data});
  }
});

module.exports = router;
