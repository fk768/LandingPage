const express = require('express');
const app = express();
const conexao = require('./DB');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(3306, () => {
    console.log('Servidor rodando em http://localhost:3306')});
