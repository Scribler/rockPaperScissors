// 1)
// ROCK PAPER SCISSORS
// Player Score: #  Computer Score: #  Total Wins: #  Total Losses: #
// How many rounds would you like to play?
// Dropdown (1-10)
// PLAY (button)

// 2)
// ROCK PAPER SCISSORS
// Player Score: #  Computer Score: #  Total Wins: #  Total Losses: #
// Round 1 of ##. Choose Your Weapon;
// (ROCK) (PAPER ) (SCISSORS)


// 3)
// ROCK PAPER SCISSORS
// Player Score: #  Computer Score: #  Total Wins: #  Total Losses: #
// Round 2 of ##. Choose Your Weapon;
// (ROCK) (PAPER ) (SCISSORS)
// You Won!, Computer won!, It's a tie!

// 4)
// ROCK PAPER SCISSORS
// Player Score: #  Computer Score: #  Total Wins: #  Total Losses: #
// Round 3 of 3. Choose Your Weapon;
// (ROCK) (PAPER ) (SCISSORS)
// ---- Load the beginning of the game with the message below instead of the default 
// ##### won the game!  Would you like to play again?




// Declaration of GLOBAL variables 
let playerScore = 0;
let computerScore= 0;
let totalWin = 0;
let totalLoss = 0;

function game () {
  
  // Declaration of Main area's and elements and giving them classes.
  const main = document.querySelector('main');
  const title = document.createElement('h1');
  title.classList.add('title');
  
  const scoreArea = document.createElement('div');
  scoreArea.classList.add('scoreArea');
  
  const callToActionArea = document.createElement('div');
  callToActionArea.classList.add('callToActionArea');
  
  const roundChoiceArea= document.createElement('div');
  roundChoiceArea.classList.add('roundChoiceArea');
  
  const buttonArea= document.createElement('div');
  buttonArea.classList.add('buttonArea');
  
  const winnerMessageArea = document.createElement('div');
  winnerMessageArea.classList.add('winnerMessageArea');

  //Initial Insertion of Elements
    // TITLE
  title.innerHTML = "Rock Paper Scissors";
  main.appendChild(title);
    // Main Sections
  main.appendChild(scoreArea);
  main.appendChild(callToActionArea);
  main.appendChild(roundChoiceArea);
  main.appendChild(buttonArea);
  main.appendChild(winnerMessageArea);
  
  // Load Initial Content
  loadScores(scoreArea, playerScore, computerScore, totalWin, totalLoss);
  loadRoundsAndStartButton(roundChoiceArea, buttonArea);

};

// Loads and updates the 'scoreArea'
function loadScores (container, playerScore, computerScore, totalWin, totalLoss) {
  // clear score area before loading initial / updated scores.
  container.innerHTML = "";
  
  // create div's
  const pScore = document.createElement('div');
  const cScore = document.createElement('div');
  const tWin = document.createElement('div');
  const tLoss = document.createElement('div');

  // fill div's
  pScore.innerText = `Player Score: ${playerScore}`;
  cScore.innerText = `Computer Score: ${computerScore}`;
  tWin.innerText = `Total Wins: ${totalWin}`;
  tLoss.innerText = `Total Losses: ${totalLoss}`;
  
  // append score div's
  container.appendChild(pScore);
  container.appendChild(cScore);
  container.appendChild(tWin);
  container.appendChild(tLoss);
}

function loadRoundsAndStartButton (roundPickerArea, buttonArea) {
  // Round Picker (Select number of rounds in the game to play.)
  const selectNumberOfRounds = document.createElement('select'); // create dropdown list with options from 1 - 10
  let rounds;
  for (let index = 1; index < 11; index++) { 
    const roundNum = document.createElement('option');
    roundNum.value = `${index}`;
    roundNum.textContent = `${index}`;
    selectNumberOfRounds.appendChild(roundNum);
  };
  roundPickerArea.appendChild(selectNumberOfRounds);

  // Play Button (activate game, and get # of rounds)
  const playButton = document.createElement('button'); // play button -> gets # of rounds, clears area, and initializes game
  playButton.textContent = "Play Game";
  playButton.classList.add('playButton'); // add sepparate style with margins to center play button
  playButton.addEventListener('click', () => {
    rounds = selectNumberOfRounds.value;
    console.log(rounds);
  });
  buttonArea.appendChild(playButton)
};

game();
// // global variables;
// const scoreArea = document.querySelector('.scoreArea');
// const gameArea = document.querySelector('.gameArea');
// const winnerMessageArea = document.querySelector('.winnerMessageArea');
// const callToAction = document.createElement('p');
// const selectNumberOfRounds = document.createElement('select'); // create dropdown list with options from 1 - 10
// for (let index = 1; index < 11; index++) { 
//   const roundNum = document.createElement('option');
//   roundNum.value = `${index}`;
//   roundNum.textContent = `${index}`;
//   selectNumberOfRounds.appendChild(roundNum);
// };
// const playButton = document.createElement('button'); // play button -> gets # of rounds, clears area, and initializes game
// playButton.textContent = "Play Game";
// playButton.classList.add('playButton'); // add sepparate style with margins to center play button
// playButton.addEventListener('click', () => {
//   rounds = selectNumberOfRounds.value;
//   console.log(rounds);
//   gameArea.removeChild(playButton);
//   gameArea.removeChild(selectNumberOfRounds);
//   callToAction.textContent = `Round ${currentRound} of ${rounds}. Choose Your Weapon!`;
//   createWeapon('rock'); // these still need work
//   createWeapon('paper'); // these still need work
//   createWeapon('scissors'); // these still need work
// });
// let playerScore = 0;
// let computerScore = 0;
// let totalWins = 0;
// let totalLosses = 0;
// let rounds = 1; // set default number of rounds to 1
// let currentRound = 1;
// let playerWeapon;
// let computerWeapon;
//
//
// function getComputerWeapon () { // should randomly generate a weapon for the computer player
//   let weapon = Math.ceil(Math.random() * 3);
//   
//   switch (weapon) {
//     case 1:
//       weapon = "rock";
//       break;
//     case 2:
//       weapon = "paper";
//       break;
//     case 3:
//       weapon = "scissors";
//       break;
//     default:
//       console.error("Something is borked. :P");
//       break;
//   };
//   computerWeapon =  weapon;
// };
//
// function compareWeapons (playerWeapon, computerWeapon) { // should compare the weapons of computer and player and return 'player' or 'computer'.
//   const winnerMessage = document.createElement('p');
//   winnerMessage.classList.add('.winnerMessage');
//   if (playerWeapon == computerWeapon) {
//     winnerMessage.innerText = "It's a Tie";
//   } else if ((playerWeapon == "rock" && computerWeapon == "scissors") || (playerWeapon == "paper" && computerWeapon == "rock") || (playerWeapon == "scissors" && computerWeapon == "paper")) {
//     winnerMessage.innerText = "Player wins the round!";
//     playerScore += 1;
//     // return "player";
//   } else {
//     winnerMessage.innerText = "Computer wins the round!";
//     computerScore += 1;
//     // return "computer"
//   }
//   winnerMessageArea.innerHTML = "";
//   winnerMessageArea.appendChild(winnerMessage);
// };
//
// function createWeapon (weaponName) {
//   const weapon = document.createElement('button');
//   weapon.textContent = `${weaponName}`;
//   weapon.value = `${weaponName}`;
//   weapon.classList.add('weaponButton');
//   gameArea.appendChild(weapon);
//   weapon.addEventListener('click', () => {
//     playerWeapon = weapon.value;
//     console.log(playerWeapon);
//     getComputerWeapon();
//     compareWeapons(playerWeapon, computerWeapon);
//     console.log(`Player Score: ${playerScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//     scoreArea.innerHTML = "";
//     displayScore("Player Score: ", playerScore, playerScore);
//     displayScore("Computer Score: ", computerScore, computerScore);
//     displayScore("Total Wins: ", totalWins, totalWins);
//     displayScore("Total Losses: ", totalLosses, totalLosses);
//     currentRound ++;
//     if (currentRound > rounds) {
//       let roundWinner;
//       if (playerScore > computerScore) {
//         roundWinner = "Player";
//         totalWins ++;
//         scoreArea.innerHTML = "";
//         displayScore("Total Wins: ", totalWins, totalWins);
//         displayScore("Total Losses: ", totalLosses, totalLosses);
//       } else if (computerScore > playerScore) {
//         roundWinner = "Computer";
//         totalLosses ++;
//         scoreArea.innerHTML = "";
//         displayScore("Total Wins: ", totalWins, totalWins);
//         displayScore("Total Losses: ", totalLosses, totalLosses);
//       } else {
//         roundWinner = "It's a Tie";
//       }
//       gameArea.innerHTML = ""
//       callToAction.textContent = `Round Winner is: ${roundWinner}. Would you like to play again?`;
//       playerScore = 0;
//       computerScore = 0;
//       rounds = 1;
//       gameArea.removeChild()
//       
//     } else {
//       callToAction.textContent = `Round ${currentRound} of ${rounds}. Choose Your Weapon!`;
//     }
//     
//   });
// };
//
//
// function displayScore (scoreName, scoreValue, idName) {
//   
//   const scoreText = document.createElement('h2');
//   scoreText.classList.add('scoreTextContent');
//   scoreText.textContent = scoreName;
//   const score = document.createElement('h2');
//   score.classList.add('scoreValueContent');
//   score.setAttribute('id', idName);
//   score.textContent = `${scoreValue}`;
//   
//   scoreArea.appendChild(scoreText);
//   scoreArea.appendChild(score);
// }
//
// function runGame (scoreArea, gameArea) { // main game script
//   callToAction.textContent = "How many rounds would you like to play?";
//   callToAction.classList.add('callToAction');
//   gameArea.appendChild(callToAction);
//
//   gameArea.appendChild(selectNumberOfRounds);
//
//   gameArea.appendChild(playButton);
// };
//
//
// // TESTING
//
//
// runGame(scoreArea, gameArea);
//
//
