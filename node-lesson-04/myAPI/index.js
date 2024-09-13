const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/firstServer", (req, res) => {
  res.send("Hi there! This is my first route built using express framework");
});

app.get("/firstUser/:id", (req, res) => {
  res.send(`Hi there, your user ID is ${req.params.id}`);
});
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});
app.listen(port, (err) => {
  if (err) {
    console.log(`Couldnt connect to the port number ${port}`);
  }
  console.log(`Listening on port ${port}`);
});
