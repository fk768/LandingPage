const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'cafeteriaaroma'
});

conexao.connect((err) => {
  if (err) {
    console.log('Erro na conexão com o banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = conexao;
