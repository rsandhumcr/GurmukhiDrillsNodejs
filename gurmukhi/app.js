var favicon = require('serve-favicon');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session')
var uuid = require('node-uuid');
var sessionClient = require('client-sessions');
var MongoStore = require('connect-mongo')(expressSession);

var routes = require('./routes/index');
var users = require('./routes/users');
var letters = require('./routes/letters');
var categories = require('./routes/category');
var subCategories = require('./routes/subCategory');
var multiQuestion = require('./routes/multiQuestion');



// Mongoose ODM...
var mongoose = require('mongoose');

// Connect to MongoDB...
mongoose.connect('mongodb://localhost:27028/gurmkhi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(bodyParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(sessionClient({
  cookieName: 'sessionClient',
  secret: 'b9aaf6e7-853b-424c-8b89-693628e2dd0c',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

// setup session id.
app.use(expressSession({
  genid: function(req) {
    //return crypto.randomBytes(48).toString('hex'); // use UUIDs for session IDs
    return uuid.v1();
  },
  secret: 'b9aaf6e7-853b-424c-8b89-693628e2dd0c',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))





app.use('/', routes);
app.use('/letters', letters);
app.use('/users', users);
app.use('/categories', categories);
app.use('/subCategories', subCategories);
app.use('/multiQuestion', multiQuestion);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
