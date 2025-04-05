// Define uma  fução para exibir a hora atual

// function displayTime(){
//   const elt = document.querySelector("#clock")
//   let now = new Date()
//   elt.innerHTML = now.toLocaleTimeString()
//   setTimeout(displayTime,1000)
// }
function displayTime() {
  const elt = document.querySelector(".clock");
  let now = new Date();
  elt.innerHTML = now.toLocaleTimeString();
  setTimeout(displayTime, 1000);
}
// window.onload = displayTime;
