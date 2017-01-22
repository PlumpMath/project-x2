var mongoose = require('mongoose');


var TaskSchema = new mongoose.Schema({
  for: String,
  taskDescr: String,
  deadline: String
});

var Task = mongoose.model('task', TaskSchema);


module.exports = Task;
