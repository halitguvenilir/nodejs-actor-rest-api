const express = require("express");
const data = require("./data");
const app = express();
const port = 1923;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/actor", (req, res) => {
  res.status(200).json(data);
});

app.get("/actor/:id", (req, res) => {
  const { id } = req.params;
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor);
  } else {
    res.status(404).send("The actor you are looking for was not found");
  }
});

app.listen(port, () => {
  console.log("app listening on port 1923");
});
