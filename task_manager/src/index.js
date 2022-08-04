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

app.post('/task', (req, res) => {
    const task = new Task(req.body) 
 
    task.save().then((data) => {
         res.status(201).send(data)
    }).catch((error) => {
         res.status(400).send(error)
    })
 })
 

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})