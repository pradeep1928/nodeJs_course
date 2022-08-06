const express = require("express");
const router = new express.Router();
const Task = require("../models/task");
const auth = require("../middleware/auth");

router.post("/task", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/task", auth, async (req, res) => {
  try {
    // const tasks = await Task.find({ owner: req.user._id});
    await req.user.populate("tasks").execPopulate();
    res.status(200).send(req.user.tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/task/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/task/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ Error: "Invalid updates" });
  }

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      res.status(404).send("User not found");
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
 
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/task/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id});
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
