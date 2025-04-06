//import Insert from "./insert.js";
import whenReady from "./whenReady.js";
import { startClock } from "./clock.js";
// function updateClock(){
//   const clock = document.querySelector("clock")
//   const now = new Date()
//   clock.textContent = now.toLocaleTimeString()
// }
whenReady(function () {
  const clock = document.getElementById("clock");
  if (clock) {
    startClock(clock);
  } else {
    console.error("Elemento do relogio nao encontrado");
  }
});
