const playerHand = document.getElementById('playerHand');
const compHand = document.getElementById('compHand');
const start = document.getElementById('startGame');
start.addEventListener('click', game);

// Rock Paper Scissors Game

function getComputerChoice() { // Returns 'rock', 'paper', or 'scissors'.
  let compChoice = Math.ceil(Math.random()*3);
  switch (compChoice) {
    case 1: // Rock
      compChoice = "Rock";
      break;
    case 2: // Paper
      compChoice = "Paper";
      break;
    case 3: // Scissors
      compChoice = "Scissors";
      break;
    default:
      compChoice = "That is not a valid entry"
      break;
  }
  return compChoice;
}

function game() {
  playerHand.classList.toggle('moveHand'); // animate player hand
  compHand.classList.toggle('moveHand'); // animate computer hand

  // NEXT
  // animate hand when hover over button. (transition animations.)
  


  // DEFAULT display
  //    - Title
  //    - NUMBER DROPDOWN - How many Rounds would you like to play?
  //    - 'Start Game' button
  //  PLAYING
  //    - Display score -> Player: 0, Computer: 0
  //    - Choose your weapon (ROCK, PAPER, SCISSORS)
  //    - Display -> Player Weapon: ####, Computer Weapon: ####
  //    - #### Wins this round. > update score.
  //    - 'NEXT ROUND' button (starts next round)
  //    - For last round display -> #### wins!
  //    - For last round display -> 'PLAY AGAIN' button > resets to default display.
  
}


// Testing
console.log(getComputerChoice());

