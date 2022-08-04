const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
})


// creating new model.

// const Task = mongoose.model("Task", {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//    completed: {
//     type: Boolean,
//     default: false
//    }
// })

// const task = new Task({
//     description: "Learn mongoose",
//     completed: false
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })