const meuforMulatio = document.querySelector("#meu_formulario");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
//const botao = document.querySelector(".botao");
const menssagem = document.querySelector(".menssagem");
const usuarios = document.querySelector("#usuario");

meuforMulatio.addEventListener("submit", enviarFormulario);

function enviarFormulario(e){
	e.preventDefault();
	if (inputNome.value === "" || inputNome.value === ""){
		menssagem.style.color = "red";
		menssagem.innerText = "Por favor, preencha dos os campos !";
		setTimeout(() => menssagem.innerText = "",3000);
	}else{

	const li = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = `${inputNome.value}: ${inputEmail}: `;
	li.appendChild(span);
	usuarios.appendChild(li);
	inputNome.value = "";
	inputEmail.alue = "";
	}
};
