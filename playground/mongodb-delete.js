  // const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
      return console.log("Unable to connect with DB");
    }
    console.log("Connected to MongoDB server");

    //DeleteMany
    // db.collection('Todos').deleteMany({name: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //DeleteOne
    // db.collection('Todos').deleteOne({name: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Swithen Colaco'}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5b5d7ba94c4e2710e4711636')
    }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });
    // db.close();
  });
