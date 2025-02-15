const listaOrdenavel = document.getElementById("lista-ordenavel");
const botaoChecar = document.getElementById("checar");

const paisesMaisPopulosos = [
	"India",
	"China",
	"Estados Unidos",
	"Indonesia",
	"Paquistao",
	"Nigeria",
	"Brasil",
	"Bangladesh",
	"Russia",
	"Mexico",
];

// Amasena itens da listaOrdenavel
const itensDaLista = [];
let indiceInicioArrasta;

// Insere itens no Dom

function criarLista(){
	[...paisesMaisPopulosos].map((item) => ({
		valor: item,
		ordem: Math.random(),
	})).sort((a,b) => a.ordem - b.ordem)
		.map((a) => a.valor)
		.forEach((pais,indice ) => {
			const item = document.createElement("li");
			item.setAttribute("data-indece",indice);
			item.innerHTML = `
				<span class="numero">${indice + 1}</span>
				<div class="arrastavel" draggable="true">
					<p class="nome-pais">${pais}</p>
					<i class="fas fa-grip-lines"></i>
				</div>
			`;
			itensDaLista.push(item);
			listaOrdenavel.appendChild(item);
		});
    adcionarDetectoresDeEventos();
}
criarLista();
function iniciarArraste (){
  indiceInicioArrasta = +this.closest("li").getAttribute("data-indece");
  //console.log(indiceInicioArrasta)
}
function encostar(){
  this.classList.add("em-cima");
}

function desencostar (){
  this.classList.remove("em-cima");
}

function emCima (evento){
  evento.preventDefault();
}

function soltar (){
  const indiceFimArraste = +this.getAttribute("data-indece");
  trocarItens(indiceInicioArrasta,indiceFimArraste);
  this.classList.remove("em-cima");
}

function trocarItens (indiceOrigem,indiceDestino){
  const itemUm = itensDaLista[indiceOrigem].querySelector(".arrastavel");
  const itemDois = itensDaLista[indiceDestino].querySelector(".arrastavel");
  itensDaLista[indiceOrigem].appendChild(itemDois);
  itensDaLista[indiceDestino].appendChild(itemUm);
}

function adcionarDetectoresDeEventos(){
const arrastaveis = document.querySelectorAll(".arrastavel");
const itensListaOrdenavel = document.querySelectorAll(".lista-ordenavel li");
  arrastaveis.forEach((arrastaveis) => {
    arrastaveis.addEventListener("dragstart", iniciarArraste);

  });
  itensListaOrdenavel.forEach((item) => {
    item.addEventListener("dragenter", encostar);
    item.addEventListener("dragleave", desencostar);
    item.addEventListener("dragover", emCima);
    item.addEventListener("drop", soltar);


  });
}


function checarOrdem(){
  itensDaLista.forEach((item,indice) => {
    const nomePais = item.querySelector(".arrastavel").innerText.trim();
  if (nomePais !== paisesMaisPopulosos[indice]){
    item.classList.add("incorreto");
  }else {
    item.classList.remove("incorreto");
    item.classList.add("correto");
  }
  })
}
botaoChecar.addEventListener("click",checarOrdem);
