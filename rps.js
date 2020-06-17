//6:03pm edit -- needs to define rock, paper, scissor = 0, 1, 2 respectively

//Computer choices

function computerPlay() {
	let computerChoice = Math.floor(Math.random() * 3)
	if (computerChoice == 0) {
		return Rock
	} else if (computerChoice == 1) {
		return Paper
	} else if (computerChoice == 0) {
		return Scissor
	} else {
		return Invaild
	}
}

//Player choices. need prompting

function playerPlay() {
	let playerChoice = prompt("Rock, paper, or scissor?")
	return playerChoice
}

//a round of RPS

function playRound(playerChoice, computerChoice) {
	playerMove = playerChoice.toLowerCase()
	computerMove = computerChoice.toLowerCase()

	if (
		(playerMove == "rock" && computerMove == "scissor") ||
		(playerMove == "paper" && computerMove == "rock") ||
		(plyaerMove == "scissor" && computerMove == "paper")
	) {
		roundResult = "win"
	} else if (
		(playerMove == "scissor" && computerMove == "rock") ||
		(playerMove == "rock" && computerMove == "paper") ||
		(playerMove == "paper" && computerMove == "scissor")
	) {
		roundResult = "lose"
	} else if (
		(playerMove == "scissor" && computerMove == "scissor") ||
		(playerMove == "rock" && computerMove == "rock")(
			playerMove == "paper" && computerMove == "paper"
		)
	) {
		roundResult = "draw"
	} else {
		roundResult = "invaild"
	}
	return roundResult
}

// 5 rounds of RPS, needs to print total round results and winner/loser

function game() {
	let playerWin = 0
	let computerWin = 0
	let playCount = 0

	for (i = 0; i < 5; i++) {
		playerMove = playerPlay()
		computerMove = computerPlay()
		roundResult = playRound(playerChoice, computerChoice)

		if (roundResult == "win") {
			playerWin++
			playCount++
			console.log(
				`You win! ${playerMove} beats ${computerMove} in Round ${playCount}`
			)
		} else if (roundResult == "lose") {
			computerWin++
			playCount++
			console.log(`You lose! ${computerMove} beats ${playerMove}`)
		} else if (roundResult == "draw") {
			playCount++
			console.log(`It\'s a draw!`)
		} else {
			console.log(`Invaild!`)
		}
		computerPlay()
		playerPlay()
	}
	console.log("---Results----")
	if (playerWin > computerWin) {
		console.log(`Player won ${playerWin} rounds, Player wins!`)
	} else if (playerWin < computerWin) {
		console.log(`Computer won ${computerWin} rounds, Computer wins!`)
	} else {
		console.log(
			`${playCount} rounds were played, Player won ${playerWin} rounds, Computer won ${computerWin} rounds, it was a draw!`
		)
	}
}

game()
