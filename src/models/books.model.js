import prisma from "../../prisma/prisma.js";

class BooksModel {
    async findAll() {
        const books = await prisma.book.findMany();

        return books;
    }

    async create(data) {
        const books = await prisma.book.create({
            data,
        });

        return books;
    }
}

export default new BooksModel();