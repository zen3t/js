let button = document.querySelector("#mybutton");
button.onclick = function () {
  alert("Thanks for clicking-me");
};
button.addEventListener("click", function () {
  alert("Thanks again!");
});
