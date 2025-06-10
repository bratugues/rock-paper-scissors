function getComputerChoice(){

let computerChoice = (Math.random());
// console.log(computerChoice)

if (computerChoice >= 0 && computerChoice <= 0.33){
    return "paper"
} else if (computerChoice > 0.33 && computerChoice <= 0.66){
    return "rock"
} else{
    return "scissors"
}
}

// const computerSelection = getComputerChoice()
// console.log("Computer played: ", computerSelection)


// Preciso criar uma funcao que vai escolher a escolha do computador
// Vou usar Math.random() para gerar um número aleatório
// Vou usar if...else if...else para gerar uma das três respostas possíveis
// Se o número gerado for maior ou igual a 0 e menor ou igual a 0.33 vai ser papel
// Se o número gerado for maior que 0.33 e menor que 0.66 vai ser pedra
// Se o número gerado for maior que 0.66 ou menor ou igual a 0.99 vai ser tesoura

function getHumanChoice (){

   let humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

   if (humanChoice === "rock"){
    return "rock"
   } else if (humanChoice === "paper"){
    return "paper"
   } else if (humanChoice === "scissors"){
    return "scissors"
   } else{
    //  console.log("Please enter a valid option")
    return getHumanChoice()
    }
   }

// const humanSelection = getHumanChoice()
// console.log ("Player played: ", humanSelection)

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice){
//     humanChoice = humanChoice.toLowerCase()
//     computerChoice = computerChoice.toLowerCase()

//     if(humanChoice === computerChoice){
//         return "It's a draw! Try again!"
//     } else if (humanChoice === "rock" && computerChoice === "scissors" ||
//     humanChoice === "paper" && computerChoice === "rock" ||
//     humanChoice === "scissors" && computerChoice === "paper"){
//         humanScore++
//         return `You win! ${humanChoice} beats ${computerChoice}!`
//     } else{
//         computerScore++
//         return `Computer win! ${computerChoice} beats ${humanChoice}!`
//     }
// }

// const roundResult = playRound(humanSelection, computerSelection)
// console.log("The result of this round is: ", roundResult)
// console.log(`Current score - Human: ${humanScore}, Computer: ${computerScore}`)

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if(humanChoice === computerChoice){
        return "It's a draw! Try again!"
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++
        return `You win! ${humanChoice} beats ${computerChoice}!`
    } else{
        computerScore++
        return `Computer win! ${computerChoice} beats ${humanChoice}!`
    }
}

// Rodada 1
console.log ("\n --- Round 1 ---")

const humanChoice1 = getHumanChoice();
const computerChoice1 = getComputerChoice();

console.log("Computer played: ", computerChoice1)
console.log("Player played: ", humanChoice1)
const result1 = playRound(humanChoice1, computerChoice1)
console.log("The result of this round is: ", result1)
console.log(`Score after first round - Human: ${humanScore}, Computer: ${computerScore}`)

// Rodada 2
console.log ("\n --- Round 2 ---")
const humanChoice2 = getHumanChoice();
const computerChoice2 = getComputerChoice();

console.log("Computer played: ", computerChoice2)
console.log("Player played: ", humanChoice2)
const result2 = playRound(humanChoice2, computerChoice2)
console.log("The result of this round is: ", result2)
console.log(`Score after second round - Human: ${humanScore}, Computer: ${computerScore}`)

// Rodada 3
console.log ("\n --- Round 3 ---")
const humanChoice3 = getHumanChoice();
const computerChoice3 = getComputerChoice();

console.log("Computer played: ", computerChoice3)
console.log("Player played: ", humanChoice3)
const result3 = playRound(humanChoice3, computerChoice3)
console.log("The result of this round is: ", result3)
console.log(`Score after third round - Human: ${humanScore}, Computer: ${computerScore}`)

// Rodada 4
console.log ("\n --- Round 4 ---")
const humanChoice4 = getHumanChoice();
const computerChoice4 = getComputerChoice();

console.log("Computer played: ", computerChoice4)
console.log("Player played: ", humanChoice4)
const result4 = playRound(humanChoice4, computerChoice4)
console.log("The result of this round is: ", result4)
console.log(`Score after fourth round - Human: ${humanScore}, Computer: ${computerScore}`)

// Rodada 5
console.log ("\n --- Round 5 ---")
const humanChoice5 = getHumanChoice();
const computerChoice5 = getComputerChoice();

console.log("Computer played: ", computerChoice5)
console.log("Player played: ", humanChoice5)
const result5 = playRound(humanChoice5, computerChoice5)
console.log("The result of this round is: ", result5)
console.log(`Score after fifth round - Human: ${humanScore}, Computer: ${computerScore}`)

// Final result
console.log("\n--- End of the Game ---")
console.log(`Final score - Human: ${humanScore}, Computer: ${computerScore}`)

if(humanScore > computerScore){
    console.log("🎉Congratulations! You won!!!🎉");
}else if (computerScore > humanScore){
    console.log("😢The computer won! Good luck next time!😢")
} else {
    console.log("🤝The game ended in a draw!🤝")
}

}

playGame()
