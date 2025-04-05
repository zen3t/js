/*
  Está função espera qualquer numero de argumentos string .Ela trata cada argumento como uma identificação de elemento e chama document.getElementById() para cada um.
  retorna um objeto que mapeia identificações 
  Lança um objeto Error se qualquer uma das indentificações for indefinida

 */
function getElements() {
  let elements = {}; // Começa com um mapa vazio

  for (let i = 0; i < arguments.length; i++) {
    // Para cada argumento
    let id = arguments[i]; // O argumento é uma
    let elt = document.getElementById(id); // identificação de elemento
    if (elt == null) throw new Error("No element with id:" + id); // Pesquisa Element
    // Se não estiver definido,
    // lança um erro
    // Mapeia a identificação no
    // elemento

    elements[id] = elt;
  }
  return elements;
  // Retorna a identificação
  // para o mapa de elementos
}
window.onload = function () {
  console.log(getElements("msg", "para"));
};
