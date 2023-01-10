import books from "../models/Livros.js";

class BookController {

    //TO GET METHODS
    static listBooks = (req, res) => {
        books.find((err, booksFind) =>{
            res.status(200).json(booksFind)
        } )
    }

    static listBookById = (req, res) => {
        const idBook = req.params.id;

        books.findById(
            idBook,
            (err, bookFind) => {

                if(!err){
                    res
                    .status(200)
                    .send(bookFind)
                }
                else{
                    res
                    .status(400)
                    .send({message: `${err.message} - ID do livro não localizado`})
                }
            }
        )
    }

    //TO POST METHODS
    static registerNewBook = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {

            if(err){
                res.send({message: `${err.message} - Fala ao cadastrar um livro`})
            }
            else{
                res.status(201).send(book.toJSON());
            }
        })
    }

    //TO PUT METHODS
    static updateBook = (req, res) => {
        const idBook = req.params.id

        books.findByIdAndUpdate(
            idBook,
            {
                $set: req.body
            },
            (err) => {
                if(!err){
                    res
                    .status(200)
                    .send({message: "Livro atualizado com sucesso" });
                }
                else{
                    res
                    .status(500)
                    .send({ message: `${err.message} - ERRO ao atualizar livro`})
                }
            }
        )
    }

    //TO DELETE METHODS
    static deleteBook = (req, res) => {
        const idBook = req.params.id;

        books.findByIdAndDelete(
            idBook,
            (err) => {
                if(!err){
                    res
                    .status(200)
                    .send({message: 'Deletado com sucesso' })
                }
                else{
                    res
                    .send({message: `${err.message} - ERRO ao deletar o livro`})
                }
            }
            )
    }
}

export default BookController