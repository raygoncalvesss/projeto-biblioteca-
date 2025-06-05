import bookcasesModel from "../models/bookcase.model.js";

class BookcasesController {
    async getAllBookcases (req, res) {
        try {
            const bookcase = await bookcasesModel.findAll()
            res.status(200).json(bookcase);
        } catch (error) {
            console.error("erro no controller da estante:", error);
            res.status(500).json({ error: "Erro ao buscar livros na estante" });
        }
    }

    async create(req, res) {
        try {
            const { title, author, gender } = req.body;

            if (!title || !author || !gender) {
                return res.status(400).json({
                    error: "Os campos de titulo, autor e genero são obrigatórios!",
                });
            }

            const data = {
                title,
                author,
                gender
            };

            const newBookcase = await bookcasesModel.create(data);

            return res.status(201).json({
                message: "Nova estante de livros criada com sucesso!",
                newBookcase,
            });
        } catch (error) {
            console.error("Erro ao criar nova estante", error);
            res.status(500).json({ error: "Erro ao criar nova estante"});
        }
    }
}

export default new BookcasesController();