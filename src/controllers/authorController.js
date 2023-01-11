import authors from "../models/Autor.js";

export default class AuthorController {

    // GET Method to author
    static listAuthor = (req, res) => {
        authors.find((err, authorFind) =>{
            res.status(200).json(authorFind)
        })
    }

    static listAuthorById = (req, res) => {
        const idAuthor = req.params.id;

        authors.findById(
            idAuthor,
            (err, authorFind) => {

                if(!err) {
                    res
                    .status(200)
                    .send(authorFind)
                }
                else{
                    res
                    .status(400)
                    .send({message: `${err} - ERRO ID de autor não localizado`})
                }
            }
        )
    }
}
