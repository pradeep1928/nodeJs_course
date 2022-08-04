// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
const Cursor = require('mongodb/lib/cursor');

const id = new ObjectID;
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length);
console.log(id.toHexString().length)

const connUrl = "mongodb://127.0.0.1:27017";
const dbName = "task_manager";

MongoClient.connect(connUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }

  const db = client.db(dbName);
//   inserting one document. 
//   db.collection("users").insertOne(
//     {
//       name: "pradeep",
//       role: "AI",
//     },
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to insert user");
//       }
//       console.log(result.ops);
//     }
//   );

// inserting many documants.
//   db.collection("users").insertMany(
//     [
//       {
//         name: "pradeep",
//         role: "AI",
//       },
//       {
//         name: "dugu",
//         role: "ML",
//       },
//     ],
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to insert user");
//       }
//       console.log(result.ops);
//     }
//   );

//   db.collection("task").insertMany(
//     [
//       {
//         description: "Watch Udemy",
//         completed: true,
//       },
//       {
//         description: "Write code",
//         completed: true,
//       },
//       {
//         description: "Have Lunch",
//         completed: false,
//       },
//     ],
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to insert task");
//       }
//       console.log(result.ops);
//     }
//   );

// fetching data from db. 
  db.collection("task").findOne({ _id: new ObjectID("62eb963ef5896b816f239adb")}, (error, user) => {
    if (error) {
        return console.log('Unable to fetch')
    }
    console.log(user)
  })

//   use of Cursor. 
  db.collection("task").find({ completed: true}).toArray((error, task) => {
    console.log(task)
  })

  db.collection("task").find({ completed: true}).count((error, count) => {
    console.log(count)
  })



});
