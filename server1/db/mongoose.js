//var mongoose = require('mongoose');
var mongoose = require('mongoose').set('debug', true);

mongoose.Promise = global.Promise;
mongoose.connect(mongodb://user:pass@123@ds125862.mlab.com:25862/node-todo-api || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }
);

module.exports = {
  mongoose: mongoose
}
