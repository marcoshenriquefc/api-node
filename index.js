import app from './src/app.js'
const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor sendo escutado: http://localhost:${port}`)
})