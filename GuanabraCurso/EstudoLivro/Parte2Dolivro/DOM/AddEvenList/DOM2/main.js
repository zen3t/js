import Insert from "./insert.js";
import whenReady from "./whenReady.js";
whenReady(function () {
  const container = document.getElementById("container");
  Insert.before(
    container,
    `<div class="alert">Este é um aviso importante</div>`
  );
});
