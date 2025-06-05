import prisma from "../../prisma/prisma.js";

class BoockcasesModel {
    async findAll() {
        const bookcases = await prisma.bookcase.findMany();

        return bookcases;
    }

    async create(data) {
        const bookcases = await prisma.bookcase.create({
            data,
        });

        return bookcases;
    }
}

export default new BoockcasesModel();