//var mongoose = require('mongoose');
var mongoose = require('mongoose').set('debug', true);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }
);

module.exports = {
  mongoose: mongoose
}
