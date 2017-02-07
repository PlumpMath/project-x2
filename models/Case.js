var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


var CaseSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, unique: true },
  descr: String,
  members: [String],  // reference
  admin: String,
  hash: String,
  salt: String
});

CaseSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');

  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

CaseSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

  return this.hash === hash;
};

CaseSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 30);

  console.log ('HellOOOooOOO!')

  return jwt.sign({
    _id: this._id,
    name: this.name,
    exp: parseInt(exp.getTime() / 1000),
  }, 'mySecretKey');
};

var Case = mongoose.model('case', CaseSchema);

module.exports = Case;