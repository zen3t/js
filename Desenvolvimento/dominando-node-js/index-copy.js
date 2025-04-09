const express = require("express");
const server = express();
// http://localhost/3000/hello/?nome=zeneto
// Query param = ?nome=zeneto&idade=41
server.get("/hello", (req, res) => {
  const { nome, idade } = req.query;
  return res.json({
    title: "Hello Ze neto",
    message: `Ola ${nome} tudo bem! com voce`,
    idade: 41,
  });
});
// http://localhost/3000/hello/zeneto
// Route param = /hello/zeneto

server.get("/hello/:nome", (req, res) => {
  const nome = req.params.nome;
  return res.json({
    title: "Hello Ze neto",
    message: `Ola ${nome} tudo bem!`,
  });
});
server.listen(3000);
