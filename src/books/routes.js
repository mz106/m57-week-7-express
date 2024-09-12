const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

// post
bookRouter.post("/books/addbook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  response.send({ message: "success", book: book });
});

module.exports = bookRouter;
