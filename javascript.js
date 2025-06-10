function getComputerChoice(){
    return Math.random();  
}
let computerChoice = (Math.random());
console.log(computerChoice)

let paper = "Paper"
let scissors = "Scissors"
let rock = "Rock"

if (computerChoice >= 0 && computerChoice <= 0.33){
    console.log(paper)
} else if (computerChoice > 0.33 && computerChoice < 0.66){
    console.log(rock)
} else{
    console.log(scissors)
}


// Preciso criar uma funcao que vai escolher a escolha do computador
// Vou usar Math.random() para gerar um número aleatório
// Vou usar if...else if...else para gerar uma das três respostas possíveis
// Se o número gerado for maior ou igual a 0 e menor ou igual a 0.33 vai ser papel
// Se o número gerado for maior que 0.33 e menor que 0.66 vai ser pedra
// Se o número gerado for maior que 0.66 ou menor ou igual a 0.99 vai ser tesoura