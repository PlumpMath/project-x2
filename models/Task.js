var mongoose = require('mongoose');


var TaskSchema = new mongoose.Schema({
  from: String,
  currentDate: {type: Date, default: Date.now},
  to: String,
  taskDescr: String,
  duedate: String,
  notification: Boolean
});

TaskSchema.methods.getUser = function () {
	//this.from = auth.currentUser  bring auth service
}

var Task = mongoose.model('task', TaskSchema);


module.exports = Task;
