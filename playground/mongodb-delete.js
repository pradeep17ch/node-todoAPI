const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDb server');
	const db = client.db('TodoApp');

	// //deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// //deleteOne
	// db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
	// 	console.log(result);
	// });

	// //findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	//db.collection('Users').deleteMany({name: 'Andrew'});

	db.collection('Users').findOneAndDelete({_id: new ObjectID("5b113a9bb822a048d1e9bb7e")}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});

	client.close();
});
