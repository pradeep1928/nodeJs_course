const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { time } = require("console");
const { title } = require("process");

const app = express();
// app.use(express.json())
// console.log(path.join(__dirname))
// console.log(path.join(__filename))

// Defining path for Express config.
const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views locations.
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve.
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Pradeep",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Pradeep",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpful: "This is helpful text.",
    title: "Help page",
    name: "Pradeep",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errmsg: "This page is not found",
    name: 'pradeep'
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errmsg: "404 page not found",
    name: 'pradeep'
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
