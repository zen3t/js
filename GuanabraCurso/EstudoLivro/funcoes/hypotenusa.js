function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b)).toFixed(2);
}

console.log(hypotenuse(4, 4));
