var express = require('express');
var router = express.Router();

var  passport = require('passport'),
    // util = require('util'),
    // logger = require('morgan'),
    session = require('express-session'),
    googleapis = require('googleapis'),
    GooglePlusStrategy = require('passport-google-plus');

var GOOGLE_CLIENT_ID = process.env['578572235537-0pd6m6osr6dh7tuk8hu6pjsglbceigr5.apps.googleusercontent.com'];
var GOOGLE_API_KEY = process.env['GOOGLE_API_KEY'];

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GooglePlusStrategy({
    clientId: GOOGLE_CLIENT_ID,
    apiKey: GOOGLE_API_KEY
  },
  function(tokens, profile, done) {
    // To keep the example simple, the user's Google profile is returned to
    // represent the logged-in user.
    return done(null, profile, tokens);
  })
);


router.set('views', __dirname + '/views');
router.set('view engine', 'ejs');
// router.use(logger('dev'));
// router.use(bodyParser.urlencoded({ extended: false }));
router.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'notasecret' }));
router.use(passport.initialize());
router.use(passport.session());
// router.use(express.static(__dirname + '/public'));


router.get('/', function(req, res){
  res.render('index.jade', { client_id: GOOGLE_CLIENT_ID });
});

router.get('/protected', ensureAuthenticated, function(req, res) {
  res.render('protected.jade', {user: req.user.email});
});

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.
router.all('/auth/google/callback', passport.authenticate('google'), function(req, res) {
  // Return user profile back to client
  res.send(req.user);
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});




// Simple route middleware to ensure user is authenticated, use on any protected
// resource.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}





























module.exports = router;