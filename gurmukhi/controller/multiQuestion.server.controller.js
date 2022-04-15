/**
 * Created by r on 28/10/2015.
 */

var genMultQuestion = require('../Services/GenerateMultipleChoiceQuestion');

exports.createQuestion = function(req, res, orderid){
    console.log('orderid : ' + orderid);
    var data = genMultQuestion.generatePictureQuestion(null, parseInt(orderid), 4, function(data){
        console.dir(data);
        res.redirect(301, '/');
    });
};
