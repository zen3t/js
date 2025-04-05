let agora = new Date();

let diaSem = agora.getDay();
switch (diaSem) {
  case 0:
    console.log("Domingo");
  case 1:
    console(`seguda`);
    break;
  case 2:
    console("Terça Feira");
    break;
  case 3:
    console.log("Quarta Feira");
    break;
  case 4:
    console.log("Quinta Feira");
    break;
  case 5:
    console.log("Sexta Feira");
    break;
  case 6:
    console.log("sabado");
    break;
  default:
    console.log("Erroo");
}
