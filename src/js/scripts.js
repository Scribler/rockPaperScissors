let totalWins = 0;
let totalLosses = 0;

function checkRounds (userInput) { // checks user's input is a number from 1 - 10
  if (userInput > 10 || userInput < 1 || isNaN(userInput)) {
    console.error("Invalid input, try again");
    return userInput;
  } else {
    return userInput;
  };
};

function getRounds () { // Get input from user on number of rounds they would like to play.
  let rounds;
  do {
    rounds = checkRounds(prompt("How many rounds would you like to play?  Enter a number between [1 - 10]"));
  } while (rounds < 1 || rounds > 10 || isNaN(rounds));
  return rounds;
};

function checkPlayerWeapon (userInput) { // checks user's input is a number from 1 - 10
  if (userInput > 10 || userInput < 1 || isNaN(userInput)) {
    console.error("Invalid input, try again");
    return userInput;
  } else {
    return userInput;
  };
};

function getPlayerWeapon () {
  let weapon;
  do {
    weapon = parseInt(checkPlayerWeapon(prompt("Choose Your Weapon! Enter (1) for rock, (2) for Paper, and (3) for Scissors.")));
  } while (weapon < 1 || weapon > 3 || isNaN(weapon));
  
  switch (weapon) {
    case 1:
      weapon = "rock";
      break;
    case 2:
      weapon = "paper";
      break;
    case 3:
      weapon = "scissors";
      break;
    default:
      console.error("Something is borked. :P");
      break;
  }
  return weapon;
}

function getComputerWeapon () { // should randomly generate a weapon for the computer player
  let weapon = Math.ceil(Math.random() * 3);
  
  switch (weapon) {
    case 1:
      weapon = "rock";
      break;
    case 2:
      weapon = "paper";
      break;
    case 3:
      weapon = "scissors";
      break;
    default:
      console.error("Something is borked. :P");
      break;
  };
  return weapon;
}

function compareWeapons (playerWeapon, computerWeapon) { // should compare the weapons of computer and player and return 'player' or 'computer'.
  if (playerWeapon == computerWeapon) {
    return "It's a Tie!"
  } else if ((playerWeapon == "rock" && computerWeapon == "scissors") || (playerWeapon == "paper" && computerWeapon == "rock") || (playerWeapon == "scissors" && computerWeapon == "paper")) {
    return "player";
  } else {
    return "computer"
  }
};

function runGame () { // main game script
  let playerScore = 0;
  let computerScore = 0;
  const rounds = getRounds(); // How many rounds does user want to play?
  console.log(`Number of rounds chosen: ${rounds}`);
  for (let index = 0; index < rounds; index++) {
    const playerWeapon = getPlayerWeapon();
    const computerWeapon = getComputerWeapon();
    const winner = compareWeapons(playerWeapon, computerWeapon);
    if (winner == "It's a Tie!") {
      console.log("It's a tie, no change to scores.");
    } else if (winner == "player"){
      playerScore++;
    } else {
      computerScore++;
    };
  console.log(`Your weapon is: ${playerWeapon}`);
  console.log(`The Computer's weapon is: ${computerWeapon}`);
  console.log(`The winner is: ${winner}`);
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  };
  if (playerScore == computerScore) {
    console.log("The game was a tie!");
  } else if (playerScore > computerScore) {
    console.log("Player won the game!");
  } else {
    console.log("Computer won the game!")
  }
};

confirm("Would you like to play a game of Rock Paper Scissors?") ? runGame() : console.log("Game Over"); // run game if user selects OK. else log "Game Over".
