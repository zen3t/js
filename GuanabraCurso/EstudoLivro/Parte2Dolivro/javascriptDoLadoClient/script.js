// Não faz nada até quando o docummento estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll(".reveal");

  for (let i = 0; i < elements.length; i++) {
    let elt = elements[i];

    // Encontra a handle (gatilho do clique) e o parágrafo oculto
    let title = elt.querySelector(".handle");
    let paragraph = elt.querySelector("p");

    if (title && paragraph) {
      title.onclick = function () {
        // Alterna entre mostrar e esconder o parágrafo
        paragraph.style.display =
          paragraph.style.display === "none" ? "block" : "none";
      };
    }
  }
});
