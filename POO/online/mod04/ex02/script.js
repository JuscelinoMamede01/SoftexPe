const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "resigtro",
  password: "",
  database: "pessoaDb",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return "Erro ao conectar ao banco de dados.";
  }

  console.log("Conexão com o banco de dados estabelecida com sucesso.");

  // Operação de inserção de dados
  const novoRegistro = { nome: "Juscelino", idade: 38 };
  connection.query("INSERT INTO pessoa SET ?", novoRegistro, (err, results) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      return "Erro ao inserir dados.";
    }
    console.log("Dados inseridos com sucesso!");

    // Por fim, encerre a conexão
    connection.end();
  });
});

connection.on("error", (err) => {
  console.error("Erro de conexão ao banco de dados:", err);
  return "Erro de conexão ao banco de dados.";
});
