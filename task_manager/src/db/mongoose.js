const { model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User',{
//  name: {
//     type: String
//  }, 
//  age: {
//     type: Number
//  }
// })


// const user = new User({
//     name: 'Rahul',
//     age: 26
// })

// user.save().then(() => {
//     console.log(user)
// }).catch((error) => {
//     console.log(error)
// })


// creating new model.

const Task = new model("Task", {
    description: {
        type: String
    }, 
   completed: {
    type: Boolean
   }
})

const task = new Task({
    description: "Learn mongoose",
    completed: false
})

task.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})