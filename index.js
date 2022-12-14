const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.listen(3003, () => {
  console.log(`Health check for 3003`);
});

app.get("/health", (req, res) => {
  res.status(200).send('Health passed');
});
