import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
    .get("/livros", BookController.listBooks)
    .post("/livros", BookController.registerNewBook)

export default router