'use strict';

var Todo = require('./models/todo');

var todos = [
	'learn node.js',
	'learn meteor framework',
	'start using unit tests in projects',
	'create boring todo list app',
	'update github pages repo',
	'create personal portfolio website',
	'get js developer job'
];

todos.forEach(function (todo, index) {
  Todo.find({ 'name': todo }, function(err, todos) {
  	if (!err && !todos.length) {
      Todo.create({ completed: false, name: todo });
  	}
  });
});
