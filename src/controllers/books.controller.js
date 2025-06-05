import booksModel from "../models/books.model.js";

class BooksController {
    async getAllBooks (req, res) {
        try {
            const books = await booksModel.findAll()
            res.status(200).json(books);
        } catch (error) {
            console.error("erro no controller de livros:", error);
            res.status(500).json({ error: "Erro ao buscar livros" });
        }
    }

    async create(req, res) {
        try {
            const { title, author, publishedAt } = req.body;

            if (!title || !author || !publishedAt) {
                return res.status(400).json({
                    error: "Os campos de titulo e autor são obrigatorios!",
                });
            }

            const data = {
                title,
                author,
                publishedAt

            };

            const newBook = await booksModel.create(data);

            return res.status(201).json({
                message: "Novo livro criado com sucesso!",
                newBook,
            });
        } catch (error) {
            console.error("Erro ao criar novo livro", error);
            res.status(500).json({ error: "Erro ao criar novo livro"});
        }
    }
}

export default new BooksController();