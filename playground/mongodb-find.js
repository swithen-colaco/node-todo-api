  // const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
      return console.log("Unable to connect with DB");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({
    //     completed: false
    // }).toArray().then((docs) => {
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch Todos', err);
    // })

    db.collection('Users').find({
        name: "Swithen"
    }).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch Todos', err);
    });

    db.close();
  });
