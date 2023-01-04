import express, { json } from "express";

const app = express();

const books = [
    {
        "id"        : 1,
        "titulo"    : 'Senhor dos anéis',
        "autor"     : 'Link park'
    },
    {
        "id"        : 2,
        "titulo"    : 'Tiranossauro',
        "autor"     : 'Jô soares'
    },
    {
        "id"        : 3,
        "titulo"    : 'Casa automática',
        "autor"     : 'Viniccius 13'
    },

]

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Estudo de Node.Js')
})

app.get('/livros', (req, res) => {
    res.status(200).json(books)
})

app.get('/livros/:id', (req, res) => {
    const indexBook = findBookIndex(req.params.id)

    res.json(books[indexBook])
})



app.post('/livros', (req, res) => {
    // const newbooks = JSON.parse(req.body)

    books.push(req.body);

    res.status(201).send('Cadastrado com sucesso')

})



app.put('/livros/:id', (req, res) => {
    const indexBook = findBookIndex(req.params.id)

    books[indexBook].titulo = req.body.titulo;
    books[indexBook].autor = req.body.autor;
    res.json(books[indexBook])
})



app.delete('/livros/:id', (req, res) => {
    const {id} = req.params
    const indexBook = findBookIndex(id);

    console.log(id)
    console.log(indexBook)

    books.splice(indexBook, 1)

    res.send('Livro deletado com sucesso')
})

function findBookIndex(idBook){
    const indexBook = books.findIndex(singleBook => singleBook.id === parseInt(idBook))

    return indexBook
}



export default app