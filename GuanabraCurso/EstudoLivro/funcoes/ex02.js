// Calcula a distancia entre pontos cartecianos
function distance(x1, x2, y1, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
console.log(distance(2, 3, 4, 5).toFixed(2));
