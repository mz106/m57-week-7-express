const express = require("express");

const app = express();

app.use(express.json());

const fakeDB = [];

app.get("/books/onebook", (request, response) => {
  const book = {
    title: "book1",
    author: "dave",
    genre: "horror",
  };
  response.send({ message: "success", book: book });
});

// get all the books (i.e. fakeDB)

app.get("/books/allbooks", (request, response) => {
  response.send("hello all books");
});

// post

app.post("/books/addbook", (request, response) => {
  fakeDB.push(request.body);

  response.send({ message: `${request.body.title} has been added` });
});

app.get("/movies/onemovie", (request, response) => {
  response.send("One movie");
});

app.put("/movies/updatemovie", (request, response) => {
  response.send("update movie");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
