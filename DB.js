const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'CafeteriaAroma'
});

conexao.connect((erro) => {
  if (erro) {
    console.log('Erro na conexão com o banco:', erro);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = conexao;
