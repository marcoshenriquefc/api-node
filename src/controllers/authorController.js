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
                    .send({message: `${err.message} - ERRO ID de autor não localizado`})
                }
            }
        )
    }

    //POST Method to register new author
    static registerNewAuthor = (req, res) => {
        let author = new authors(req.body)

        author.save( (err) => {

            if(!err){
                res
                .status(201)
                .send(author.toJSON())
            }
            else{
                res
                .status(400)
                .send(`${err.message} - ERRO ao cadastrar novo author`)
            }
        })
    }
}
