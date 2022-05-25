// O express retorna uma function
const express = require('express')

// aqui eu estou chamando a function
const server = express()

//essa é uma rota
// localhost:3000/teste
// a function() representa como a rota vai ser manipulada.
// req => requerimentos.
//res => resposta para o cliente.
server.get('/users/:id', (req, res) => {
  //  Query params = ?teste=1
    // const nome = req.query.nome
    // return res.json({ message: `Hello ${nome}`})

  //  Route params = /teste/1
    const { id } = req.params
    return res.json({ message: `Buscando o usuário ${id}`})
  //  Request body = { "name": "Diego", "email": "diego@rocketseat.com.br"}
  //send => retorna um texto na resposta.
})

//auqi eu definindo a porta que o servidor deve "ouvir" (LISTEN)
server.listen(3000)