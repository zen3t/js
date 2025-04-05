let uniqueInter = (function () {
  let counter = 0;
  return function () {
    return counter++;
  };
})();
console.log(uniqueInter(1));
