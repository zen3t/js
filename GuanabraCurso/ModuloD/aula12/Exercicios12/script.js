function carregar() {
  const msg = document.querySelector(".msg");
  const img = document.querySelector("#imagem");
  const data = new Date();
  const hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = "./img/manha.webp";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./img/tarde.webp";
    document.body.style.background = "#b984cf";
  } else {
    img.src = "./img/noite.webp";
    document.body.style.background = "#515154";
  }
}
