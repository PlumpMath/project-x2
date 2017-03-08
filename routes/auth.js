var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt')
var auth = jwt({secret: 'mySecretKey'});
var passport = require('passport');

require('../config/passport');

// router.use(passport.initialize()); /// ?????
var User = require('../models/Users');
var Cases = require('../models/Case');


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


router.post('/createcase', function (req, res) {
  var newCase = new Cases();

  newCase.name = req.body.name
  newCase.admin = req.body.admin
  newCase.descr = req.body.descr
  newCase.setPassword(req.body.password)

  newCase.save(function (err) {
    if (err) { console.log (err) }

    return res.json({token: newCase.generateJWT()})
  })
})

router.get('/cases', function (req, res) {
  Cases.find(function (err, cases) {
    if (err) {console.log (err)}

    res.send(cases)
  })
})

router.get('/cases/:caseName', function (req,res) {

  Cases.findOne({name: req.caseName}, function (err, data) {
    if (err) { console.log (err) }
    res.send(data)
  })

})

router.param('caseName', function (req, res, next, cname) {
  req.caseName = cname;
  return next();
})

router.post('/authcase', function (req, res, next) {
  passport.authenticate('joincase', function (err, aucase, info) {

    if (aucase) {
      return res.json({token: aucase.generateJWT()});
    } else {
      return res.status(401).json(info);
    }

  })(req, res, next);
})


module.exports = router;