const express = require("express");
const app = express();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("./bookHandlers"); // 'bookHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /books
app.get("/books", getAllBooks);

// POST /books
app.post("/books", createBook);

// GET /books/:bookId
app.get("/books/:bookId", getBookById);

// PUT /books/:bookId
app.put("/books/:bookId", updateBook);

// DELETE /books/:bookId
app.delete("/books/:bookId", deleteBook);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
