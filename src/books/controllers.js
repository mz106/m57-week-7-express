const Book = require("./model");

const addBook = async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  response.send({ message: "success", book: book });
};

const dynamicExample = async (request, response) => {
  response.send({ message: "success", obj: update });
};

module.exports = {
  addBook: addBook,
  dynamicExample: dynamicExample,
};
