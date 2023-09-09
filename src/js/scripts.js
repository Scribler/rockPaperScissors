const playerHand = document.getElementById('playerHand');
const compHand = document.getElementById('compHand');
const start = document.getElementById('startGame');
const buttons = document.querySelectorAll('button');

// Event Listeners
// start.addEventListener('click', game);
buttons.forEach(button => button.addEventListener('click', (e) => {
  // console.log(e.target.dataset.choice);
  const buttonClicked = e.target.dataset.choice;
  switch (buttonClicked) {
    case 'start-game':
      console.log(`You Clicked: ${buttonClicked}`);
      break;
    case 'rock':
      console.log(`You Clicked: ${buttonClicked}`);
      break;
    case 'paper':
      console.log(`You Clicked: ${buttonClicked}`);
      break;
    case 'scissors':
      console.log(`You Clicked: ${buttonClicked}`);
      break;

    default:
      break;
  }
}));
// Rock Paper Scissors Game

function getComputerChoice() { // Returns 'rock', 'paper', or 'scissors'.
  let computerChoice = Math.ceil(Math.random()*3);
  switch (computerChoice) {
    case 1: // Rock
      computerChoice = "rock";
      break;
    case 2: // Paper
      computerChoice = "paper";
      break;
    case 3: // Scissors
      computerChoice = "scissors";
      break;
    default:
      computerChoice = "That is not a valid entry"
      break;
  }
  return computerChoice;
}

function compareChoices(playerChoice, computerChoice){ // Compare player and computer choices
  let winner = 'player';                   // return >> winner name || 'tie'.
  if (playerChoice == computerChoice) {
    winner = 'tie';
    return winner;
  }
  if (playerChoice == 'rock' && computerChoice == 'paper') {
    winner = 'computer';
  } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
    winner = 'computer';
  } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    winner = 'computer';
  }
  return winner;
}

function round(roundNum) {
  console.log(`Round ${roundNum}!`);
  let playerChoice = prompt('Rock Paper or Scissors?');
  let computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);
  let result = compareChoices(playerChoice, computerChoice);
  return result;
}


function game() {
  // playerHand.classList.toggle('moveHand'); // animate player hand
  // compHand.classList.toggle('moveHand'); // animate computer hand
  let pScore = 0;
  let cScore = 0;
  let winner;
  for (let i = 1; i < 6; i++) { // run 5 rounds
    let result = round(i);
    if(result == 'player'){
      pScore += 1;
    }
    if(result == 'computer'){
      cScore += 1;
    }
    if(result == 'tie') {
      console.log("It's a tie!");
    } else {
      console.log(`${result} is the winner of this round!`);
    }
    console.log('The Score is:')
    console.log(`Player: ${pScore}`);
    console.log(`Computer: ${cScore}`)
  };
  if(pScore == cScore) {
    console.log("The final result is.... It's a tie!");
  } else if (pScore > cScore){
    console.log(`The final result is.... Player is the winner!`);
  } else {
    console.log(`The final result is.... Computer is the winner!`);
  }
}
