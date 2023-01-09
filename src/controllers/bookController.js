import books from "../models/Livros.js";

class BookController {
    static listBooks = (req, res) => {
        books.find((err, booksFind) =>{
            res.status(200).json(booksFind)
        } )
    }
}

export default BookController