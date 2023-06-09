const playerHand = document.getElementById('playerHand');
const compHand = document.getElementById('compHand');
const start = document.getElementById('startGame');
start.addEventListener('click', game);

// Rock Paper Scissors Game

function getComputerChoice() { // Returns 'rock', 'paper', or 'scissors'.
  let compChoice = Math.ceil(Math.random()*3);
  switch (compChoice) {
    case 1: // Rock
      compChoice = "rock";
      break;
    case 2: // Paper
      compChoice = "paper";
      break;
    case 3: // Scissors
      compChoice = "scissors";
      break;
    default:
      compChoice = "That is not a valid entry"
      break;
  }
  return compChoice;
}

function compareChoices(pChoice, cChoice){
  let winner = 'player';
  if (pChoice == cChoice) {
    winner = 'tie';
    return winner;
  }
  if (pChoice == 'rock' && cChoice == 'paper') {
    winner = 'computer';
  } else if (pChoice == 'paper' && cChoice == 'scissors') {
    winner = 'computer';
  } else if (pChoice == 'scissors' && cChoice == 'rock') {
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
