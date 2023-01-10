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


export default app