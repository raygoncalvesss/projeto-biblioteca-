import express from "express";

// Importar todas as rotas
import booksRouter from "./books.routes.js";
import bookcasesRouter from "./bookcase.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/books", booksRouter);
router.use("/bookcases", bookcasesRouter);

// Rotas protegidas

export default router;