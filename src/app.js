import express, { json } from "express";
import db from "./config/dbconfig.js"
import books from './models/Livros.js'
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão ============ "))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())

routes(app);

// app.get('/livros/:id', (req, res) => {
//     const indexBook = findBookIndex(req.params.id)

//     res.json(books[indexBook])
// })


// app.put('/livros/:id', (req, res) => {
//     const indexBook = findBookIndex(req.params.id)

//     books[indexBook].titulo = req.body.titulo;
//     books[indexBook].autor = req.body.autor;
//     res.json(books[indexBook])
// })



// app.delete('/livros/:id', (req, res) => {
//     const {id} = req.params
//     const indexBook = findBookIndex(id);

//     console.log(id)
//     console.log(indexBook)

//     books.splice(indexBook, 1)

//     res.send('Livro deletado com sucesso')
// })

// function findBookIndex(idBook){
//     const indexBook = books.findIndex(singleBook => singleBook.id === parseInt(idBook))

//     return indexBook
// }



export default app