let pessoa = {
  nome: "ze neto",
  idade: 41,
  peso: 85,
  altura: 1.75,
  sobrenome: "sobrinho",
  endereco: {
    rua: "juliao dos nascimento",
    cep: 3495069 - 99,
    estado: "Rn",
  },
};

let carro = {
  marca: "ford",
  ano: 1983,
  portas: 4,
  cor: "preto",
};

let produtos = {
  descricao: [],
  preco: [],
};

let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
document.write(`<h1> O meu imc e : ${imc.toFixed(2)}</h1>`);

produtos.descricao = ["carne"];
produtos.preco = "3.76";

produtos.descricao = [...produtos.descricao, "milho", "uvas", "creme"];
