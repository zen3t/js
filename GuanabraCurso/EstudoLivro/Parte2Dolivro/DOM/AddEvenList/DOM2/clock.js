export function startClock(element) {
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    element.textContent = `${h}:${m}:${s}`;
  }

  updateClock(); // atualiza logo ao iniciar
  return setInterval(updateClock, 1000); // atualiza a cada segundo
}
