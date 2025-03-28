let aviso = document.querySelector("#aviso");
let formulario = document.querySelector("#form");

let btnCalcular = document.querySelector("#btnCalcular");
let btnLimpar = document.querySelector("#btnLimpar");

// CELECIONAR CAIXA DE TEXTO POR ID
let cxNota1 = document.querySelector("#nota1");
let cxNota2 = document.querySelector("#nota2");
let cxMedia = document.querySelector("#media");
let cxSituacao = document.querySelector("#situacao");
// CALCUALR MEDIA
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

// DEFINIR SITUACAO FINAL COM BASE NA MEDIA
function situacaoFinal(medialFinal) {
  if (medialFinal >= 7) {
    situacaoFinal = "Aprovado";
  } else if (medialFinal <= 3) {
    situacaoFinal = "Reprovado";
  } else {
    situacaoFinal = "Recuperacao";
  }
  return situacaoFinal;
}
// FORMATAR A CAIXA DA SITUACAOFINAL
function formatarSituacao(situacaoFinal) {
  switch (situacaoFinal) {
    case "Aprovado(a)":
      cxSituacao.classList.remove("reprovado");
      cxSituacao.classList.remove("recuperacao");
      cxSituacao.classList.add("aprovado");
      console.log("Adicionar class aprovado");
      break;
    case "Reprovado(a)":
      cxSituacao.classList.remove("aprovado");
      cxSituacao.classList.remove("recuperacao");
      cxSituacao.classList.add("reprovado");
      console.log("Adicionar class reprovado");
      break;
    case "Recuperacao(a)":
      cxSituacao.classList.remove("aprovado");
      cxSituacao.classList.remove("reprovado");
      cxSituacao.classList.add("recuperacao");
      console.log("Adicionar class recuperacao");
      break;
    default:
      console.log("Situacao Indefinida");
  } // Fim do case
}
// VALIDAR E GERA FLESH MESSAGE
function validarNumero(numero) {
  let num1 = cxNota1.value;
  let num2 = cxNota2.value;
  if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
    formulario.reset();
    aviso.textContent = "Digite uma nota entre 0.0 a 10";
    aviso.classList("alerta");
    setTimeout(function () {
      aviso.textContent = "";
      aviso.classList.remove("alerta");
    }, 2000);
  }
}
// CALCUALR A MEDIA APOS O CLICK DO BOTAO
btnCalcular.addEventListener("click", function (e) {
  console.log("Calcular Media");
  // pega os valores que esta dento das caixas
  // usar metodo parse
  // float para converter string para float
  let nota1 = parseFloat(cxNota1.value);
  let nota2 = parseFloat(cxNota2.value);
  let media = calcularMedia(nota1, nota2);

  if (isNaN(media) || media < 0) {
    console.log("Nao e um numero");
    cxSituacao.value = "";
  } else {
    cxMedia.value = parseFloat(media);
    cxSituacao.value = situacaoFinal(media);
    formatarSituacao(situacaoFinal);
  }
  e.preventDefault();
});
// APOS LIMPAR TIRAR AS CLASS CX SITUACAO
btnLimpar.addEventListener("click", function () {
  cxSituacao.classList.remove("aprovado");
  cxSituacao.classList.remove("reprovado");
  cxSituacao.classList.remove("recuperacao");
});
