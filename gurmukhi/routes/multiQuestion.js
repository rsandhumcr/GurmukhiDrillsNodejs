/**
 * Created by r on 28/10/2015.
 */

var express = require('express');
var router = express.Router();
var multiQuestionCtrl = require('../controller/multiQuestion.server.controller');

/* GET home page. */
router.get('/mquestion/:orderid', function(req, res, next) {
    return multiQuestionCtrl.createQuestion(req, res, req.params.orderid);
});

module.exports = router;