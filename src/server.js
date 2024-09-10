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
app.get("/books/getallbooks", (request, response) => {
  response.send({ message: "success" });
});

app.get("/books/onebook", (request, response) => {
  response.send({ message: "success" });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
