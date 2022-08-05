const express = require('express');
const router = new express.Router()
const Task = require('../models/task')

router.post("/task", async (req, res) => {
    const task = new Task(req.body);
  
    try {
      await task.save()
      res.status(201).send(task)
    } catch (error) {
      res.status(400).send(error)
    }
  
  
  //   task
  //     .save()
  //     .then((data) => {
  //       res.status(201).send(data);
  //     })
  //     .catch((error) => {
  //       res.status(400).send(error);
  //     });
  });
  
  router.get("/task", async (req, res) => {
      try {
         const tasks =  await Task.find({})
         res.status(200).send(tasks)
      } catch (error) {
          res.status(500).send(error)
      }
  
  //   Task.find({})
  //     .then((users) => {
  //       res.send(users);
  //     })
  //     .catch((error) => {
  //       res.status(500).send(error);
  //     });
  });
  
  router.get("/task/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const task = await Task.findById(_id);
      if (!task) {
          return res.status(404).send("Task not found");
      }
      res.status(200).send(task)
    } catch (error) {
      res.status(500).send(error)
    }
  
  
  //   Task.findById(_id)
  //     .then((task) => {
  //       if (!task) {
  //         return res.status(404).send("task not found");
  //       }
  //       res.send(task);
  //     })
  //     .catch((error) => {
  //       res.status(500).send(error);
  //     });
  });
  
  
  router.patch("/task/:id", async (req, res) => {
      const updates = Object.keys(req.body);
      const allowedUpdates = ['description', 'completed'];
      const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  
      if (!isValidOperation) {
          return res.status(400).send({Error: "Invalid updates"});
      }
  
      try {   
          const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
          })
          if (!task) {
              res.status(404).send("User not found");
          }
          res.status(200).send(task)
      } catch (error) {
          res.status(500).send(error)
      }
  })
  
  
  router.delete('/task/:id', async (req, res) => {
      try {
          const task = await Task.findByIdAndDelete(req.params.id)
          if (!task) {
              return res.status(404).send("Task not found")
          }
          res.status(200).send(task)
      
      } catch (error) {
          res.status(500).send(error)
      }
  })
  

  module.exports = router