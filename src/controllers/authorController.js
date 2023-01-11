import authors from "../models/Author.js";

export default class AuthorController {

    // GET Method to author
    static listAuthor = (req, res) => {
        authors.find((err, authorFind) => {
            res.status(200).json(authorFind)
        })
    }

    static listAuthorById = (req, res) => {
        const idAuthor = req.params.id;

        authors.findById(
            idAuthor,
            (err, authorFind) => {

                if (!err) {
                    res
                        .status(200)
                        .send(authorFind)
                }
                else {
                    res
                        .status(400)
                        .send({ message: `${err.message} - ERRO ID de autor não localizado` })
                }
            }
        )
    }

    //POST Method to register new author
    static registerNewAuthor = (req, res) => {
        let author = new authors(req.body)

        author.save((err) => {

            if (!err) {
                res
                    .status(201)
                    .send(author.toJSON())
            }
            else {
                res
                    .status(400)
                    .send(`${err.message} - ERRO ao cadastrar novo author`)
            }
        })
    }

    // PUT Method to update author data
    static updateAuthor = (req, res) => {
        const idAuthor = req.params.id;

        authors.findByIdAndUpdate(
            idAuthor,
            {
                $set: req.body
            },
            (err) => {
                if (!err) {
                    console.log('aaaa')
                    res
                    .status(200)
                    .send(
                        {
                            message: `Dados do autor atualizado com sucesso`,
                        })
                }
                else {
                    console.log('bbbb')
                    res
                        .status(400)
                        .send(`${err.message} - ERRO ao atualizar os dados do autor`)
                }
            }
        )
    }

    // DELETE Method to remove author
    static deleteAuthor = (req, res) => {
        const idAuthor = req.params.id;

        authors.findByIdAndDelete(
            idAuthor,
            (err) => {

                if(!err) {
                    res
                        .status(200)
                        .send({message: "Autor removido com sucesso"})
                }
                else {
                    res
                    .status(500)
                    .send({message: `${err.message} - ERRO ao remover autor`})
                }
            }
        )
    }
}
