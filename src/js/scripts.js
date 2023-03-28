// Rock Paper Scissors Game

function getComputerChoice() { // Returns 'rock', 'paper', or 'scissors'.
  let compChoice = Math.ceil(Math.random()*3);
  switch (compChoice) {
    case 1:
      compChoice = "Rock";
      break;
    case 2:
      compChoice = "Paper";
      break;
    case 3:
      compChoice = "Scissors";
      break;
    default:
      compChoice = "That is not a valid entry"
      break;
  }
  return compChoice;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
