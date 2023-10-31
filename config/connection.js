const mysql = require('mysql2/promise');

function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;
  try {
    const connection = mysql.createConnection("mysql://root:@localhost:3306/Produtobd");
    console.log("Conectado ao SGBD MySQL");
    global.connection = connection;
    return connection;
  } catch (e) {
    console.log("Ocorreu um erro ao conectar com o banco de dados");
  }
}

module.exports = {connect};
