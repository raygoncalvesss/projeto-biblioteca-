import express from "express";

import bookcasesController from "../controllers/bookcase.controller.js";

const bookcasesRouter = express.Router();

//Rota para obter todos os livros
bookcasesRouter.get("/", bookcasesController.getAllBookcases);
bookcasesRouter.post("/", bookcasesController.create);

export default bookcasesRouter;