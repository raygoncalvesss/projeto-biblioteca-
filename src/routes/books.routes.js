import express from "express";

import booksController from "../controllers/books.controller.js";

const booksRouter = express.Router();

//Rota para obter todos os livros
booksRouter.get("/", booksController.getAllBooks);
booksRouter.post("/", booksController.create);

export default booksRouter;