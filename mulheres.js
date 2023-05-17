const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ada Lovelance',
        imagem: 'https://pin.it/5vdQ7A0',
        minibio: 'Matemática e primeira programadora do mundo. Escreveu o primeiro algortimo para ser processado por uma máquina.'
    },
    {
        nome: 'Hipátia de Alexandria',
        imagem: 'https://pin.it/75Lht96',
        minibio: 'Foi a primeira mulher documentada como tendo sido matemática. Como chefe da escola platônica em Alexandria, também lecionou filosofia e astronomia.'
    },
    {
        nome: 'Angela Davis',
        imagem: 'https://pin.it/6wAVGzK',
        minibio: 'Angela Yvonne Davis é uma professora e filósofa socialista estadunidense que alcançou notoriedade mundial na década de 1970 como integrante dos Panteras Negras. Angela foi importante para a luta antirracista americana e um exemplo para a luta antirracista de outros países.'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)