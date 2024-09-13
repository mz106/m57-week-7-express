const { Router } = require("express");
const bookRouter = Router();

const { addBook, dynamicExample } = require("./controllers");

// post
bookRouter.post("/books/addbook", addBook);

// dynamic object example
bookRouter.post("/books/dynamicexample", dynamicExample);

module.exports = bookRouter;
