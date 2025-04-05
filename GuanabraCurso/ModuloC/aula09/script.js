const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const res = document.querySelector(".res");
function somar() {
  let n1 = Number(text1.value);
  let n2 = Number(text2.value);
  let s = n1 + n2;
  res.innerHTML = `A soma de ${n1} e ${n2} e igual a : ${s}`;
}
