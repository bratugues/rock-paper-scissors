function getComputerChoice(){

let computerChoice = (Math.random());
console.log(computerChoice)

if (computerChoice >= 0 && computerChoice <= 0.33){
    return "Paper"
} else if (computerChoice > 0.33 && computerChoice <= 0.66){
    return "Rock"
} else{
    return "Scissors"
}
}

const computerSelection = getComputerChoice()
console.log("Computer played: ", computerSelection)


// Preciso criar uma funcao que vai escolher a escolha do computador
// Vou usar Math.random() para gerar um número aleatório
// Vou usar if...else if...else para gerar uma das três respostas possíveis
// Se o número gerado for maior ou igual a 0 e menor ou igual a 0.33 vai ser papel
// Se o número gerado for maior que 0.33 e menor que 0.66 vai ser pedra
// Se o número gerado for maior que 0.66 ou menor ou igual a 0.99 vai ser tesoura

function getHumanChoice (){

   let humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

   if (humanChoice === "rock"){
    return "Rock"
   } else if (humanChoice === "paper"){
    return "Paper"
   } else if (humanChoice === "scissors"){
    return "Scissors"
   } else{
    //  console.log("Please enter a valid option")
    return getHumanChoice()
    }
   }

const humanSelection = getHumanChoice()
console.log ("Player played: ", humanSelection)

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    if(humanChoice === computerChoice){
        return "It's a draw! Try again!"
    } else if (humanChoice === "rock" && computerChoice === "Scissors" ||
    humanChoice === "paper" && computerChoice === "Rock" ||
    humanChoice === "scissors" && computerChoice === "Paper"){
        humanScore++
        return `You win! ${humanChoice} beats ${computerChoice}!`
    } else{
        computerScore++
        return `Computer win! ${computerChoice} beats ${humanChoice}!`
    }
}

const roundResult = playRound(humanSelection, computerSelection)
console.log("The result of this round is: ", roundResult)
console.log(`Current score - Human: ${humanScore}, Computer: ${computerScore}`)