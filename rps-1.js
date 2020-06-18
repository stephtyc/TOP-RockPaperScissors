let result;
let playerWin = 0;
let computerWin = 0;
let playCount = 0;

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

function playRound(playerSelection, computerSelection) {
	playerChoice = playerSelection.toLowerCase();

	if (
		(playerChoice === "rock" && computerSelection === "scissor") ||
		(playerChoice === "paper" && computerSelection === "rock") ||
		(playerChoice === "scissor" && computerSelection === "paper")
	) {
		return (result = "win");
	} else if (
		(playerChoice === "scissor" && computerSelection === "rock") ||
		(playerChoice === "rock" && computerSelection === "paper") ||
		(playerChoice === "paper" && computerSelection === "scissor")
	) {
		return (result = "lose");
	} else if (
		(playerChoice === "scissor" && computerSelection === "scissor") ||
		(playerChoice === "rock" && computerSelection === "rock") ||
		(playerChoice === "paper" && computerSelection === "paper")
	) {
		return (result = "draw");
	}
}

function game() {
	for (i = 0; i < 5; i++) {
		computerChoice = computerPlay();
		let playerChoice = prompt("Rock, paper or scissors?");
		console.log(
			`Computer chose ${computerChoice}, Player chose ${playerChoice}`
		);
		playRound(playerChoice, computerChoice);

		if (result == "win") {
			playerWin++;
			playCount++;
			console.log(
				`You win! ${playerChoice} beats ${computerChoice} in Round ${playCount}`
			);
		} else if (result == "lose") {
			computerWin++;
			playCount++;
			console.log(
				`You lose! ${computerChoice} beats ${playerChoice} in Round ${playCount}`
			);
		} else if (result == "draw") {
			playCount++;
			console.log(`It\'s a draw in Round ${playCount}`);
		}
	}
	console.log("--------");
	//Total Results
	if (playerWin > computerWin) {
		console.log(`You win with ${playerWin} rounds`);
	} else if (playerWin < computerWin) {
		console.log(`Computer wins with ${computerWin} rounds`);
	} else if (playerWin === computerWin) {
		console.log(`It\'s a tie`);
	}
}

game();
