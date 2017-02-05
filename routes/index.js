var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Task = require('../models/Task');
var Group = require('../models/Group');


router.post('/addnewtask', function (req, res) {
	var task = new Task ();

	task.from = req.body.current
  task.to = req.body.to
  task.taskDescr = req.body.descr
  task.duedate = req.body.duedate
  task.notification = req.body.notifications

  task.save(function (err) {
  	if (err) { console.log (err) }

  	res.end();
  })
})

module.exports = router;