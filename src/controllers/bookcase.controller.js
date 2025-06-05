import boockcasesModel from "../models/bookcase.model.js";

class BoockcasesController {
    async getAllBoockcases (req, res) {
        try {
            const boockcase = await boockcasesModel.findAll()
            res.status(200).json(boockcase);
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

            const newBoockcase = await boockcasesModel.create(data);

            return res.status(201).json({
                message: "Nova estante de livros criada com sucesso!",
                newBoockcase,
            });
        } catch (error) {
            console.error("Erro ao criar nova estante", error);
            res.status(500).json({ error: "Erro ao criar nova estante"});
        }
    }
}

export default new BoockcasesController();