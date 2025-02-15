const ul = document.querySelector(".itens");
console.log(ul)

// PRIMEIRO METODO PARA REMOVER ELEMENTOS
// ul.remove()

// Remover o ultimo elemento filho
// ul.lastElementChild.remove()

// Defenir um conteudo do elemento
ul.firstElementChild.textContent = "Carne"
ul.children[2].textContent = "Manga"

// Defenir um HTML interno de um elemento
ul.lastElementChild.innerHTML = "<h2>Ola mundo</h2>"

// E assim que podemos alterar um estilo de um elemento
const botao = document.querySelector(".botao");
botao.style.background = "red";
