const {
  createBookHandler,
  listBookHandler,
  getBookHandler,
  updateBookHandler,
  removeBookHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: createBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: listBookHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: removeBookHandler,
  },
];

module.exports = routes;
