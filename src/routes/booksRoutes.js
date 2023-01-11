import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
    .get("/livros", BookController.listBooks)
    .get("/livros/buscar", BookController.findBookByEditora)
    .get("/livros/:id", BookController.listBookById)
    .post("/livros", BookController.registerNewBook)
    .put('/livros/:id', BookController.updateBook)
    .delete('/livros/:id', BookController.deleteBook)

export default router


