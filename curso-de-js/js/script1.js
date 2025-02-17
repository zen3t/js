let lutador = "Andeson silva";
let nacionalidade = "Brazil";
let idade = 41;
let peso = 98;
let altura = 1.83;
document.write(`<div class="card">
                <h2>lutador</h2>
                <img src='./img/fedor.jpg'>
                <p>${lutador} </p>
                <p>${nacionalidade} </p>
                <p>${idade} </p>
                <p>${peso} kg</p>
                <p>${altura} m</p>
                </div>
`);
/* Desafio 2 */
const dia = 17;
const mes = 2;
const ano = 2025;
const frase = "O dia nasceu belo mais nao tem o que brilhar";
const autor = "Carmelia lopes";
document.write(`<div class='citacao'>
                <h2>Frase do dia</h2>
                <h3>${dia}/${mes}/${ano}</h3>
                <blockquote>&#10077${frase}&#10078<blockquote>
                <p>${autor}</p>
                </div>
`);
/* Desafio 3 */
let mesDoAno = ["Janeiro", "Fevereiro", "Marco"];
document.write(`<div class='meses'>
                <h2>Array de Meses do Ano</h2>
                <p>${mesDoAno[0]}, ${mesDoAno[1]}, ${mesDoAno[2]}, ...</p>
                
                </div>
`);
/*Desafio 4 */
const jogo = {
  titulo: "Mortal Kombat",
  desenvolvedor: "Poul de paulo",
  anoDeLancamento: 1978,
};
document.write(`<div class='jogo'>
                <h2>Jogo</h2>
                <span>Titulo</span>
                <p>${jogo.titulo}</p>
                <span>Desenvolvedor</span>
                <p>${jogo.desenvolvedor}</p>
                <span>Ano de Desenvolvimento</span>
                <p>${jogo.anoDeLancamento}</P>
                </div>
`);
