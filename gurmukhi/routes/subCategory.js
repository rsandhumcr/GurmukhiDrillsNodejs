/**
 * Created by r on 25/10/2015.
 */
var express = require('express');
var router = express.Router();
var subCategoryCtrl = require('../controller/subCategory.server.controller');

/* GET home page. */
router.get('/:name/:id', function(req, res, next) {
    return subCategoryCtrl.getAll(req, res);
});

router.post('/create', function(req, res, next) {
    return subCategoryCtrl.create(req, res);
});

module.exports = router;