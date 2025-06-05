const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '', 
  database: 'cafeteriaaroma'
});

conexao.connect((erro) => {
  if (erro) {
    console.log('Erro na conexão com o banco:', erro);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = conexao;
