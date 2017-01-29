var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_BRONZE_URI || 'mongodb://localhost/officemembers');

mongoose.Promise = global.Promise;

var routes = require('./routes/index');
var users = require('./routes/auth');
// var users = require('./routes/google-auth');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/', users)

var port = (process.env.PORT || '8800');

app.listen(port, function () {
  console.log('ok! On localhost:' + port);
});