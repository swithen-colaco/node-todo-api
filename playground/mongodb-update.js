  // const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
      return console.log("Unable to connect with DB");
    }
    console.log("Connected to MongoDB server");

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b608075eaae73144c89e347')
    }, {
        $set: {
          name: 'Swithen'
        },
        $inc: {
          age: 1
        }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })

    // db.close();
  });
