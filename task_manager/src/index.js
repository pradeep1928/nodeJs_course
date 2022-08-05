const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error)
  }


  //    Using promise with .then
  //    user.save().then((data) => {
  //         res.status(201).send(data)
  //    }).catch((error) => {
  //         res.status(400).send(error)
  //    })
});



app.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }


//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
});


app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
        return res.status(404).send("User not found")
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }


//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send("user not found");
//       }
//       res.send(user);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
});

app.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({Error: "Invalid updates"});
    }

    try {   
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!user) {
            res.status(404).send("User not found");
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send("User not found")
        }
        res.status(200).send(user)
    
    } catch (error) {
        res.status(500).send(error)
    }
})


app.post("/task", async (req, res) => {
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

app.get("/task", async (req, res) => {
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

app.get("/task/:id", async (req, res) => {
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


app.patch("/task/:id", async (req, res) => {
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


app.delete('/task/:id', async (req, res) => {
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



app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
