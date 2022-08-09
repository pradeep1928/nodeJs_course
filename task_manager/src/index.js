const app = require('./app')
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("Welcome to task-manager-app")
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
