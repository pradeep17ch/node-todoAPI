const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b11cfe064da8f563f10bcaa';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// // Todo.find({
// // 	_id: id	
// // }).then((todos) => {
// // 	console.log('Todos', todos);
// // });

// // Todo.findOne({
// // 	_id: id	
// // }).then((todo) => {
// // 	console.log('Todo', todo);
// // });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id', todo);
// }).catch((e) => {
// 	console.log(e);
// });

var id = '5b119c68919981507544e697';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Id not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});