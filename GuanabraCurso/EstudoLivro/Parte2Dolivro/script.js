//Localiza o elemento timestamp

let timestamp = document.getElementById("timestamp");
if (timestamp.firstChild == null) {
  timestamp.appendChild(document.createTextNode(new Date().toString()));
}
timestamp.className = "highlight";
// Atualiza o conteudo do timestamp quando o usuario clicar nele
// timestamp.onclick = function () {
//   this.innerHTML = new Date().toString();
// };
