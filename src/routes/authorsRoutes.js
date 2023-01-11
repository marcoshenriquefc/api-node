import express from "express"
import AuthorController from "../controllers/authorController.js"

const router = express.Router();

router
    .get("/autores", AuthorController.listAuthor)
    .get("/autores/:id", AuthorController.listAuthorById)
    .post("/autores", AuthorController.registerNewAuthor)
    .put("/autores/:id", AuthorController.updateAuthor)
    .delete("/autores/:id", AuthorController.deleteAuthor)


export default router