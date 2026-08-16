// Helpers
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

function playRound(HumanChoice, ComputerChoice, HumanScore, ComputerScore){
    let Insensitive_HumanChoice = HumanChoice.toUpperCase();
    let Insensitive_ComputerChoice = ComputerChoice.toUpperCase();

    if (Insensitive_HumanChoice == "ROCK" && Insensitive_ComputerChoice == "PAPER"){
        ComputerScore ++;
        return ["You Lose!!! Paper beats Rock", HumanScore, ComputerScore];
    }
    else if (Insensitive_HumanChoice == "ROCK" && Insensitive_ComputerChoice == "SCISSORS"){
        HumanScore ++;
        return ["You Win!!! Rock beats Scissors", HumanScore, ComputerScore];
    }
    else if (Insensitive_HumanChoice == "PAPER" && Insensitive_ComputerChoice == "ROCK"){
        HumanScore ++;
        return ["You Win!!! Paper beats Rock", HumanScore, ComputerScore];
    }
    else if (Insensitive_HumanChoice == "PAPER" && Insensitive_ComputerChoice == "SCISSORS"){
        ComputerScore ++;
        return ["You Lose!!! Scissors beats Paper",  HumanScore, ComputerScore];
    }
    else if (Insensitive_HumanChoice == "SCISSORS" && Insensitive_ComputerChoice == "ROCK"){
        ComputerScore ++;
        return ["You Lose!!! Rock beats Scissors", HumanScore, ComputerScore];
    }
    else if (Insensitive_HumanChoice == "SCISSORS" && Insensitive_ComputerChoice == "PAPER"){
        HumanScore ++;
        return ["You Win!!! Scissors beats Paper",  HumanScore, ComputerScore];
    }
    else{
        return ["Draw!!!", HumanScore, ComputerScore];
    }
}


// Main
function main(){
    // Scores
    let HumanScore = 0;
    let ComputerScore = 0;
    
    // Select nodes
    let HumanScore_span = document.querySelector("#player-score");
    let ComputerScore_span = document.querySelector("#ai-score");
    let rock_btn = document.querySelector("#rock");
    let paper_btn = document.querySelector("#paper");
    let scissors_btn = document.querySelector("#scissors");
    let result_div = document.querySelector(".result");

    // Buttons event
    rock_btn.addEventListener("click", function(){
        let result = playRound("ROCK", getComputerChoice(), HumanScore, ComputerScore);

        // Create div that stores result text
        let output_div = document.createElement("div");
        output_div.textContent = result[0];

        // replace old children
        result_div.replaceChildren(output_div);

        // Update Score
        HumanScore = result[1];
        ComputerScore = result[2];

        
        HumanScore_span.textContent = HumanScore;
        ComputerScore_span.textContent = ComputerScore;

        if(HumanScore == 5){
        // restart if there is a winner
            HumanScore = 0;
            ComputerScore = 0;
            HumanScore_span.textContent = 0;
            ComputerScore_span.textContent = 0;

            alert("Human is the Winner!!!");
        }

        if(ComputerScore == 5){
            // restart if there is a winner
            HumanScore = 0;
            ComputerScore = 0;
            HumanScore_span.textContent = 0;
            ComputerScore_span.textContent = 0;

            alert("Computer is the Winner!!!");
        }
    });
    

    paper_btn.addEventListener("click", function(){
        let result = playRound("PAPER", getComputerChoice(), HumanScore, ComputerScore);

        // Create div that stores result text
        let output_div = document.createElement("div");
        output_div.textContent = result[0];

        // replace old children
        result_div.replaceChildren(output_div);

        // Update Score
        HumanScore = result[1];
        ComputerScore = result[2];

        
        HumanScore_span.textContent = HumanScore;
        ComputerScore_span.textContent = ComputerScore;

        if(HumanScore == 5){
            // restart if there is a winner
            HumanScore = 0;
            ComputerScore = 0;
            HumanScore_span.textContent = 0;
            ComputerScore_span.textContent = 0;
            result_div.replaceChildren();

            alert("Human is the Winner!!!");
        }

        if(ComputerScore == 5){
            // restart if there is a winner
            HumanScore = 0;
            ComputerScore = 0;
            HumanScore_span.textContent = 0;
            ComputerScore_span.textContent = 0;
            result_div.replaceChildren();

            alert("Computer is the Winner!!!");
        }
    });

    
    scissors_btn.addEventListener("click", function(){
        let result = playRound("SCISSORS", getComputerChoice(), HumanScore, ComputerScore);

        // Create div that stores result text
        let output_div = document.createElement("div");
        output_div.textContent = result[0];

        // replace old children
        result_div.replaceChildren(output_div);

        // Update Score
        HumanScore = result[1];
        ComputerScore = result[2];

        
        HumanScore_span.textContent = HumanScore;
        ComputerScore_span.textContent = ComputerScore;
        
        if(HumanScore == 5){
            // restart if there is a winner
            HumanScore = 0;
            ComputerScore = 0;
            HumanScore_span.textContent = 0;
            ComputerScore_span.textContent = 0;
            result_div.replaceChildren();

            alert("Human is the Winner!!!");
        }

        if(ComputerScore == 5){
            // restart if there is a winner
            HumanScore = 0;
            ComputerScore = 0;
            HumanScore_span.textContent = 0;
            ComputerScore_span.textContent = 0;
            result_div.replaceChildren();

            alert("Computer is the Winner!!!");
        }
    });


}

main()



