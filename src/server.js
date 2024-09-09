const express = require("express");

const app = express();

// http://localhost:5000/beetlejuice
// https://mycoolwebsite/beetlejuice

app.use("/beetlejuice", express.static("beetlejuice"));

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
