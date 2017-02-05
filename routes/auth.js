var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt')
var auth = jwt({secret: 'mySecretKey'});
var passport = require('passport');

require('../config/passport');

// router.use(passport.initialize()); /// ?????
var User = require('../models/Users');
var Group = require('../models/Group');


router.post('/register', function(req, res, next){

  var user = new User();

  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.name = req.body.name;
  user.lastname = req.body.lastname;
  user.mail = req.body.email;
  user.cell = req.body.cellnumber;

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});

router.post('/login', function (req, res, next) {
	 if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
	passport.authenticate('login', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
})


router.post('/creategroup', function (req, res) {
  var group = new Group ();

  group.name = req.body.name
  group.admin = req.body.admin
  group.descr = req.body.descr
  group.setPassword(req.body.password)

  group.save(function (err) {
    if (err) { console.log (err) }

    res.end();
  })
})


module.exports = router;