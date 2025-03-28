import "./styles/settings/colors.css";
import "./styles/elements/base.css";
import CardGame from "./components/CardGame";
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
