import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
    .get("/livros", BookController.listBooks)
    .get("/livros/:id", BookController.listBookById)
    .post("/livros", BookController.registerNewBook)
    .put('/livros/:id', BookController.updateBook)

export default router