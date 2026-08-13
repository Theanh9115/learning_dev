function getComputerChoice(){
    let choice = Math.random();
    if (choice < 0.33){
        return "Rock";
    }
    else if (choice < 0.66){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    let HumanChoice = prompt("Rock, Paper, or Scissors?");
    return HumanChoice;
}

// console.log(getHumanChoice());

let HumanScore = 0;
let ComputerScore = 0;

function playRound(HumanChoice, ComputerChoice){
    let Insensitive_HumanChoice = HumanChoice.toUpperCase();
    let Insensitive_ComputerChoice = ComputerChoice.toUpperCase();

    if (Insensitive_HumanChoice == "ROCK" && Insensitive_ComputerChoice == "PAPER"){
        ComputerScore ++;
        return "You Lose!!! Paper beats Rock";
    }
    else if (Insensitive_HumanChoice == "ROCK" && Insensitive_ComputerChoice == "SCISSORS"){
        HumanScore ++;
        return "You Win!!! Rock beats Scissors";
    }
    else if (Insensitive_HumanChoice == "PAPER" && Insensitive_ComputerChoice == "ROCK"){
        HumanScore ++;
        return "You Win!!! Paper beats Rock";
    }
    else if (Insensitive_HumanChoice == "PAPER" && Insensitive_ComputerChoice == "SCISSORS"){
        ComputerScore ++;
        return "You Lose!!! Scissors beats Paper";
    }
    else if (Insensitive_HumanChoice == "SCISSORS" && Insensitive_ComputerChoice == "ROCK"){
        ComputerScore ++;
        return "You Lose!!! Rock beats Scissors";
    }
    else if (Insensitive_HumanChoice == "SCISSORS" && Insensitive_ComputerChoice == "PAPER"){
        HumanScore ++;
        return "You Win!!! Scissors beats Paper";
    }
    else{
        return "Draw!!!"
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));


