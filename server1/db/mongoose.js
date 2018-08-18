//var mongoose = require('mongoose');
var mongoose = require('mongoose').set('debug', true);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:pass123@ds125862.mlab.com:25862/todoapi' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose
}
