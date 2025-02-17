const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timerLeft = 1500;

function updateTimer() {
	let minutes = Math.floor(timerLeft / 60);
	let seconds = timerLeft % 60;
	let formatTimer = `${minutes.toString().padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`;

	timerEl.innerHTML = formatTimer;
}

function startTimer() {
	interval = setInterval(() => {
		timerLeft--;
		updateTimer();
		if (timerLeft === 0) {
			clearInterval(interval);
			alert("Time's up");
			timerLeft = 1500;
			updateTimer();
		}
	}, 1000);
}

function startStop() {
	clearInterval(interval);
	updateTimer();
}
function startReset() {
	clearInterval(interval);
	timerLeft = 1500;
	updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", startStop);
resetEl.addEventListener("click", startReset);
