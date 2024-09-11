require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// DB connection

const connection = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("DB is working");
};

connection();

// Book model

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("book", bookSchema);

// Routes

// post
app.post("/books/addbook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  response.send({ message: "success", book: book });
});

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

app.get("/books/onebook", (request, response) => {
  response.send({ message: "success" });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
