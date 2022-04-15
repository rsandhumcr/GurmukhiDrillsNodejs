var express = require('express');
var router = express.Router();
var dataProvider = require('../Services/DataProvider');
var arrayUtils  = require('../Services/ArrayUtils');

dataProvider.setImagePath('/images');
dataProvider.setAudioPath('/audio');

/* GET Letters page. */
router.get('/', function(req, res, next) {
    console.log('sessionId : ' + req.session.id);
    var filteredLetters = dataProvider.getAll();
    //console.log(filteredLetters);
    res.render('letters', { title: 'Letters', data : filteredLetters  });
});
router.get('/kgroup', function(req, res, next) {
    console.log('sessionId : ' + req.session.id);
    var filteredLetters = dataProvider.filterLettersByRows([1]);
    console.log(filteredLetters);
    res.render('kgroup', { title: 'k group', data : filteredLetters  });
});

router.get('/cgroup', function(req, res, next) {
    console.log('sessionId : ' + req.session.id);
    var filteredLetters = dataProvider.filterLettersByRows([2]);
    //console.log(filteredLetters);
    res.render('cgroup', { title: 'c group', data : filteredLetters  });
});

router.get('/tailgroup', function(req, res, next) {
    console.log('sessionId : ' + req.session.id);
    var filteredLetters = dataProvider.filterLettersByRows([3]);
    //console.log(filteredLetters);
    res.render('tailgroup', { title: 'tail group', data : filteredLetters  });
});

router.get('/tgroup', function(req, res, next) {
    var filteredLetters = dataProvider.filterLettersByRows([4]);
    //console.log(filteredLetters);
    res.render('tgroup', { title: 't tgroup', data : filteredLetters  });
});

router.get('/pgroup', function(req, res, next) {
    var filteredLetters = dataProvider.filterLettersByRows([5]);
    //console.log(filteredLetters);
    res.render('pgroup', { title: 'p tgroup', data : filteredLetters  });
});

router.get('/voicelessunaspirated', function(req, res, next) {
    var filteredLetters = dataProvider.filterLettersByOrder([5,10, 15, 20, 25 ]);
    console.log(filteredLetters);
    res.render('voicelessunaspirated', { title: 'Voiceless Unaspirated', data : filteredLetters  });
});

router.get('/voicelessaspirated', function(req, res, next) {
    var filteredLetters = dataProvider.filterLettersByOrder([6,11, 16, 21, 26 ]);
    //console.log(filteredLetters);
    res.render('voicelessaspirated', { title: 'Voiceless Aspirated', data : filteredLetters  });
});

router.get('/voicedunaspirated', function(req, res, next) {
    var filteredLetters = dataProvider.filterLettersByOrder([7,12, 17, 22, 27 ]);
    //console.log(filteredLetters);
    res.render('voicedunaspirated', { title: 'Voiced Unaspirated', data : filteredLetters  });
});

router.get('/voicedaspirated', function(req, res, next) {
    var filteredLetters = dataProvider.filterLettersByOrder([8,13, 18, 23, 28]);
    //console.log(filteredLetters);
    res.render('voicedaspirated', { title: 'Voiced Aspirated', data : filteredLetters  });
});

router.get('/nasals', function(req, res, next) {
    var filteredLetters = dataProvider.filterLettersByOrder([9,14, 19, 24, 29 ]);
    //console.log(filteredLetters);
    res.render('nasals', { title: 'Nasals', data : filteredLetters  });
});

module.exports = router;
