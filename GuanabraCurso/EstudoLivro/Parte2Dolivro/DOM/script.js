function extContent(element, value) {
  let content = element.textContent;

  if (value === undefined) {
    // Se nenhum valor for passado, retorna o texto atual
    if (content !== undefined) return content;
    else return element.innerText;
  } else {
    // Aqui está o ERRO original:
    // ❌ element.textContent.value;
    // O CORRETO é:
    if (content !== undefined) {
      element.textContent = value;
      element.classList.add("WARNING");
    } else {
      element.innerText = value;
    }
  }
}
// Insere um no filho no pai de modo a se tornar filho do pai
// Insere o nó filho no pai de modo a se tornar o filho de índice n
// function insertAt(parent, child, n) {
//   if (n < 0 || n > parent.childNodes.length) {
//     throw new Error("invalid index");
//   } else if (n === parent.childNodes.length) {
//     parent.appendChild(child); // Adiciona no final
//   } else {
//     parent.insertBefore(child, parent.childNodes[n]); // Insere antes do n-ésimo filho
//   }
// }

// Agora, mover isso para FORA da função extContent:
window.onload = function () {
  let h1 = document.getElementById("text");

  extContent(h1, "Esta ficando bom ");
};
