import books from "../models/Livros.js";

class BookController {
    static listBooks = (req, res) => {
        books.find((err, booksFind) =>{
            res.status(200).json(booksFind)
        } )
    }

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
}

export default BookController