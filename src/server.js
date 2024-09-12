require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");

const Book = require("./books/model");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

// Routes

// get all the books
app.get("/books/getallbooks", async (request, response) => {
  const books = await Book.find({});

  response.send({ message: "success", books: books });
});

// delete one book by title

app.delete("/books/deletebookbytitle", async (request, response) => {
  // put code here
});

app.put("/books/updatebookauthor", async (request, response) => {
  // put code here
  // we will need
  // 1. filter object (filter by title)
  // 2. update object (author)
});

// app.get("/books/onebook", (request, response) => {
//   response.send({ message: "success" });
// });

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
