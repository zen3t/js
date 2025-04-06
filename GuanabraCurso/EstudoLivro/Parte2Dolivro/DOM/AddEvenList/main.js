let whenReady = (function () {
  let funcs = []; // Array para armazenar as funções a serem executadas
  let ready = false; // Flag que indica se o DOM está pronto

  // Função que lida com eventos de carregamento do DOM
  function handle(e) {
    if (ready) return; // Se já está pronto, não faz nada
    // Se o evento for "readystatechange" e o estado não for "complete", ainda não está pronto
    if (e.type === "readystatechange" && document.readyState !== "complete")
      return;

    // Executa todas as funções registradas
    for (let i = 0; i < funcs.length; i++) {
      funcs[i].call(document); // Chama cada função com o "document" como contexto
    }
    ready = true; // Marca como pronto
    funcs = null; // Libera o array para economizar memória
  }

  // Registra os eventos para detectar quando o DOM está pronto
  if (document.addEventListener) {
    document.addEventListener("readystatechange", handle, false);
    document.addEventListener("DOMContentLoaded", handle, false);
    window.addEventListener("load", handle, false); // "load" é registrado na window, não no document
  } else if (document.attachEvent) {
    // Suporte para navegadores antigos (ex.: IE)
    document.attachEvent("onreadystatechange", handle);
    window.attachEvent("onload", handle);
  }

  // Retorna a função que será usada para registrar callbacks
  return function whenReady(f) {
    if (ready)
      f.call(document); // Se já está pronto, executa imediatamente
    else funcs.push(f); // Caso contrário, adiciona ao array para executar depois
  };
})();

whenReady(function () {
  console.log("esta pronto");
  document.querySelector("body").style.backgroundColor = "lightblue";
  document.querySelector("h1").textContent = "Teste feito com sucesso";
});
