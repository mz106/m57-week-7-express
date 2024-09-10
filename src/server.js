const express = require("express");

const app = express();

app.use(express.json());

app.get("/books/onebook", (request, response) => {
  response.send({ message: "success" });
});

// get all the books (i.e. fakeDB)

app.get("/books/allbooks", (request, response) => {
  response.send({ message: "success" });
});

// post

app.post("/books/addbook", (request, response) => {
  response.send({ message: "success" });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
