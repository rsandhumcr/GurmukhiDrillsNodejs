var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sess = req.session;
  var sessionId = req.session.id;
  console.log('sessionId : ' + req.session.id);
  console.dir(sess);
  var message = 'new';
  if(req.session.before){
    message = req.session.before;
  } else{
    req.session.before = Date.now();
  }

  res.render('index', { title: 'Show Id' , session : sess, sessionId : sessionId, message : message});
});

router.get('/destroysession', function(req, res, next) {
  var sessionId = req.session.id;
  console.log('sessionId : ' + req.session.id);
    var message = req.session.before;
    req.session.destroy(function(err) {
      console.log('session destroyed');
    })
  res.render('index', { title: 'destroysession' , session : {}, sessionId : sessionId, message : message});
});

module.exports = router;
