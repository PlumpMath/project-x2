var mongoose = require('mongoose');
var crypto = require('crypto');


var GroupSchema = new mongoose.Schema({
  name: String,
  descr: String,
  members: [String],
  admin: String,
  hash: String,
  salt: String
});

GroupSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');

  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

GroupSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

  return this.hash === hash;
};


var Group = mongoose.model('group', GroupSchema);

module.exports = Group;
