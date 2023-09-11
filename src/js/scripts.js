// global variables;
let playerScore = 0;
let computerScore = 0;
let totalWins = 0;
let totalLosses = 0;
let rounds = 1; // set default number of rounds to 1
let playerWeapon;


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

function createWeapon (areaToAppendTo, weaponName) {
  const weapon = document.createElement('button');
  weapon.textContent = `${weaponName}`;
  weapon.value = `${weaponName}`;
  weapon.classList.add('weaponButton');
  areaToAppendTo.appendChild(weapon);
  weapon.addEventListener('click', () => {
  playerWeapon = weapon.value;
  console.log(playerWeapon);
  // sets player's weapon type
    // *************** But still needs to trigger comparison to computer weapon ****************
  });
}


function runGame () { // main game script
  const gameArea = document.querySelector('.gameArea'); // game area (everything is added to this)
  const callToAction = document.createElement('p');
  callToAction.textContent = "How many rounds would you like to play?";
  callToAction.classList.add('callToAction');
  gameArea.appendChild(callToAction);

  const selectNumberOfRounds = document.createElement('select'); // create dropdown list with options from 1 - 10
  for (let index = 1; index < 11; index++) { 
    const roundNum = document.createElement('option');
    roundNum.value = `${index}`;
    roundNum.textContent = `${index}`;
    selectNumberOfRounds.appendChild(roundNum);
  11}
  gameArea.appendChild(selectNumberOfRounds);

  const playButton = document.createElement('button'); // play button -> gets # of rounds, clears area, and initializes game
  playButton.textContent = "Play Game";
  playButton.addEventListener('click', () => {
    rounds = selectNumberOfRounds.value;
    console.log(rounds);
    gameArea.removeChild(playButton);
    gameArea.removeChild(selectNumberOfRounds);
    callToAction.textContent = "Choose Your Weapon!";
    createWeapon(gameArea, 'rock'); // these still need work
    createWeapon(gameArea, 'paper'); // these still need work
    createWeapon(gameArea, 'scissors'); // these still need work
  });
  gameArea.appendChild(playButton);



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


// TESTING


runGame();


// confirm("Would you like to play a game of Rock Paper Scissors?") ? runGame() : console.log("Game Over"); // run game if user selects OK. else log "Game Over".
