var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../models/Users');
var Cases = require('../models/Case');

passport.use('login', new LocalStrategy(
  function(username, password, done) {

    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


passport.use('joincase', new LocalStrategy(
  function(username, password, done) {
    Cases.findOne({ name: username }, function (err, aucase) {
      if (err) { return done(err); }

      if (!aucase.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, aucase);
    });
  }
));
