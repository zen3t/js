function debug(msg) {
  let log = document.getElementById("debuglog");
  if (!log) {
    log = document.createElement("div");
    log.id = "debuglog";
    log.innerHTML = "<h1>Debug Log</h1>";
    document.body.appendChild(log);
  }
  let pre = document.createElement("h1");
  let text = document.createTextNode(msg);
  pre.appendChild(text);
  log.appendChild(pre);
}
debug("Ola zeneto");
