const { model, STATES } = require('mongoose');
const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User',{
//  name: {
//     type: String,
//     required: true,
//     trim: true
//  }, 
//  email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//         if (!validator.isEmail(value)) {
//             throw new Error("email is invalid")
//         }
//     }
//  },
//  age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//         if (value < 0) {
//             throw new Error("Age must be positive number.")
//         }
//     }
//  },
//  password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(value) {
//         if (value.toLowerCase().includes('password')) {
//             throw new Error('password cannot contain word "password"')
//         }
//     }
//  }
// })


// const user = new User({
//     name: '  sameer',
//     age: 24,
//     email: ' SAmeer@gmail.com',
//     password: 'gfdpasswordsds'
// })

// user.save().then(() => {
//     console.log(user)
// }).catch((error) => {
//     console.log(error)
// })


// creating new model.

const Task = new model("Task", {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
   completed: {
    type: Boolean,
    default: false
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