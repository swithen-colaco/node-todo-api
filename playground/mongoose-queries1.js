const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b6698bba2fd8f10d0924e00';
console.log(mongoose.connection.readyState);
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
  console.log('Todo by Id ', todo);
});

Todo.find().then((todo) => {
  console.log('All Todos: ', todo);
});
