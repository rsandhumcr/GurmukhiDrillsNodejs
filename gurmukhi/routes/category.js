/**
 * Created by r on 25/10/2015.
 */
var express = require('express');
var router = express.Router();
var categoryCtrl = require('../controller/category.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    var sessionId = req.session.id;
    return categoryCtrl.getAll(req, res);
});

router.post('/create', function(req, res, next) {
    var sessionId = req.session.id;
    return categoryCtrl.create(req, res);
});

module.exports = router;