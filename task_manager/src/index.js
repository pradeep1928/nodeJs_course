const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

app.post('/users', (req, res) => {
   const user = new User(req.body) 

   user.save().then((data) => {
        res.status(201).send(data)
   }).catch((error) => {
        res.status(400).send(error)
   })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send("user not found")
        }
        res.send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})


app.post('/task', (req, res) => {
    const task = new Task(req.body) 
 
    task.save().then((data) => {
         res.status(201).send(data)
    }).catch((error) => {
         res.status(400).send(error)
    })
 })
 
 app.get('/task', (req, res) => {
    Task.find({}).then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(500).send(error)
    })
})


app.get('/task/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send("task not found")
        }
        res.send(task)
    }).catch((error) => {
        res.status(500).send(error)
    })
})


app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})