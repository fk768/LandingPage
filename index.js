const express = require('express');
const app = express();
const conexao = require('./DB');

app.use(express.json());

app.post('/verificar', (req, res) => {
  const { id, nome, email, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE id = ? AND nome = ? AND email = ? AND senha = ?';
  const valores = [id, nome, email, senha];

  conexao.query(sql, valores, (erro, resultados) => {
    if (erro) {
      res.status(500).send('Erro na consulta ao banco');
      return;
    }

    if (resultados.length > 0) {
      res.send('Usuário encontrado e verificado');
    } else {
      res.send('Usuário não encontrado ou dados incorretos');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
