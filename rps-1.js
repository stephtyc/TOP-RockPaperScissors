let playerWin = 0;
let computerWin = 0;
let playCount = 0;

//Computer choice.

function computerPlay() {
	let computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		return "rock";
	} else if (computerChoice === 1) {
		return "paper";
	} else if (computerChoice === 2) {
		return "scissor";
	}
}

//When it shows "it's a draw" how do I remove the results in the next round? stick an event listener to one of the buttons?
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function () {
	if (playCount < 5) {
		let playerChoice = "rock";
		let computerChoice = computerPlay();
		playRound(playerChoice, computerChoice);
		playCount++;
	} else if (playCount >= 5) {
		alert("Click reset button to play again!");
	}
	// if (playCount >= 5) {
	// 	alert("Click reset button to play again!");
	// 	return;
	// } else {
	// 	let playerChoice = "rock";
	// 	let computerChoice = computerPlay();
	// 	playRound(playerChoice, computerChoice);
	// 	playCount++;
	// }
	//Once 5 rounds are finished, show results and reset button
	if (playCount === 5) {
		totalScore(playerWin, computerWin);
	}
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
	if (playCount >= 5) {
		alert("Click reset button to play again!");
	} else {
		let playerChoice = "rock";
		let computerChoice = computerPlay();
		playRound(playerChoice, computerChoice);
		playCount++;
	}

	if (playCount === 5) {
		totalScore(playerWin, computerWin);
	}
});

const btnScissor = document.querySelector("#scissor");
btnScissor.addEventListener("click", () => {
	if (playCount >= 5) {
		alert("Click reset button to play again!");
	} else {
		let playerChoice = "scissor";
		let computerChoice = computerPlay();
		playRound(playerChoice, computerChoice);
		playCount++;
	}

	if (playCount === 5) {
		totalScore(playerWin, computerWin);
	}
});

function playRound(playerChoice, computerChoice) {
	if (
		(playerChoice === "rock" && computerChoice === "scissor") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissor" && computerChoice === "paper")
	) {
		playerWin++;
		scoreBoard();
		//checking if the number of wins are being counted properly

		console.log(`Player wins ${playerWin} rounds`);
		return (result = "win");
	} else if (
		(playerChoice === "scissor" && computerChoice === "rock") ||
		(playerChoice === "rock" && computerChoice === "paper") ||
		(playerChoice === "paper" && computerChoice === "scissor")
	) {
		computerWin++;
		scoreBoard();
		console.log(`Computer wins ${computerWin} rounds`);
		return (result = "lose");
	} else if (
		(playerChoice === "scissor" && computerChoice === "scissor") ||
		(playerChoice === "rock" && computerChoice === "rock") ||
		(playerChoice === "paper" && computerChoice === "paper")
	) {
		console.log(`It's a draw! ${playCount} rounds were played`);
		let draw_score = document.createElement("h4");
		draw_score.textContent = "It's a draw!";
		document.body.appendChild(draw_score);

		scoreBoard();

		return (result = "draw");
	} //to remove the "it's a draw" once user presses another selection. if statement, conditions use playCoount> 5?
}

function totalScore(playerWin, computerWin) {
	if (playerWin > computerWin) {
		let scoreAnnouncement = document.createElement("h4");
		scoreAnnouncement.textContent = "Player won!";
		scoreAnnouncement.style.cssText = "color: #2A52BE";
		document.body.appendChild(scoreAnnouncement);
	} else if (playerWin < computerWin) {
		let scoreAnnouncement = document.createElement("h4");
		scoreAnnouncement.textContent = "Computer won!";
		scoreAnnouncement.style.cssText = "color: #2A52BE";

		document.body.appendChild(scoreAnnouncement);
	} else {
		let scoreAnnouncement = document.createElement("h4");
		scoreAnnouncement.textContent = "It's a draw!";
		scoreAnnouncement.style.cssText = "color: #2A52BE";

		document.body.appendChild(scoreAnnouncement);
	}

	const reset_btn = document.createElement("button");
	reset_btn.setAttribute("class", "reset");
	reset_btn.textContent = "Let's Play Again!";
	reset_btn.addEventListener("click", reloadPage);
	document.body.appendChild(reset_btn);
}

//Sync up win count with the HTML scoreboard section
function scoreBoard() {
	let user_score = document.getElementById("user-score");
	let comp_score = document.getElementById("comp-score");

	user_score.innerHTML = playerWin;

	comp_score.innerHTML = computerWin;
}

//For resetting the game when the user clicks the reset button or when either user or computer wins

function reloadPage() {
	window.location.reload();
}
