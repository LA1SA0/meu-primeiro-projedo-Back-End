const mongoose = require('mongoose')
const conectaBancoDeDados = require('./bancoDeDados')

const mulherSchema = new mongoose.Schema({
   nome: { type: String, required: true },
   imagem: { type: String, required: true },
   minibio: { type: String, required: true }
 });

module.exports = mongoose.model('ela', mulherSchema)