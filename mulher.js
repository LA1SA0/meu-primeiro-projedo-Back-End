const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Ada Lovelance',
    imagem: 'https://pin.it/5vdQ7A0',
    minibio: ' Matemática e primeira programadora do mundo. Escreveu o primeiro algortimo para ser processado por uma máquina.'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)