const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
