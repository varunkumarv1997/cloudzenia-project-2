const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Microservice");
});

app.get("/microservice", (req, res) => {
  res.send("Hello from Microservice");
});

app.listen(3000, () => {
  console.log("Microservice running on port 3000");
});
