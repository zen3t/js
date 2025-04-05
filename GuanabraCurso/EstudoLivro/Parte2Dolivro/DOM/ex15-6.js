// este modulo define Elemete.insertAdjacentHTML para navegadores que
// nao suportam e também define funcoes portaveis de insercao de HTML que tme, nomes mais logicos do qu insertAdjacentHTML
// Insert.before(),Insert.after(),Insert.atStart,Insert.atend()
let Insert = (function () {
  if (document.createElement("div").insertAdjacentHTML) {
    return {
      before: function (e, h) {
        e.insertAdjacentHTML("beforebegin", h);
      },
      after: function (e, h) {
        e.insertAdjacentHTML("afterend", h);
      },
      atStart: function (e, h) {
        e.insertAdjacentHTML("afterbegin", h);
      },
      atEnd: function (e, h) {
        e.insertAdjacentHTML("beforeend", h);
      },
    };
  }
  function fragment(html) {
    let elt = document.createElement("div");
    let frag = document.createDocumentFragment();
    elt.innerHTML = html;
    while (elt.firstChild) frag.appendChild(elt.firstChild);
    return frag;
  }
  let Insert = {
    before: function (elt, html) {
      elt.parentNode.insertBefore(fragment(html), elt);
    },
    after: function (elt, html) {
      elt.parentNode.insertBefore(fragment(html), elt.nextSibling);
    },
    atStart: function (elt, html) {
      elt.insertBefore(fragment(html), elt.firstChild);
    },
    atEnd: function (elt, html) {
      elt.appendChild(fragment(html));
    },
  };
  Element.prototype.insertAdjacentHTML = function (pos, html) {
    switch (
      pos.toLowerCase() // Corrigido: toLowerCase()
    ) {
      case "beforebegin":
        return Insert.before(this, html);
      case "afterend":
        return Insert.after(this, html);
      case "afterbegin":
        return Insert.atStart(this, html);
      case "beforeend":
        return Insert.atEnd(this, html);
    }
  };
  return Insert;
})();

let div = document.getElementById("WARNING");
let h2 = document.getElementById("text");
Insert.before(div, "<h1>Cascading Sheets Demo</h1>");
Insert.atStart(h2, "<h2>Warning</h2>");
Insert.atEnd(
  h2,
  "This is warning! Note how it grabs your  attention with bold text"
);
Insert.after(
  div,
  `<p id='special'>This paragraph is centered and appears in uppercase letters.<br>
<span>Here we explicity use an unline style uppercase</span>></p>`
);
