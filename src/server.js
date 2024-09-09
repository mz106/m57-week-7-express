const express = require("express");

const app = express();

app.use(express.json());

const fakeDB = [];

app.get("/books", (request, response) => {
  const book = {
    title: "book1",
    author: "dave",
    genre: "horror",
  };
  response.send({ message: "success", book: book });
});

// get all the books (i.e. fakeDB)

// post

app.post("/books", (request, response) => {
  fakeDB.push(request.body);

  response.send({ message: `${request.body.title} has been added` });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
