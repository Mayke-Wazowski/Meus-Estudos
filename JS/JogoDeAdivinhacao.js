console.log(" * * * *");
console.log(" * JOGO DE ADINHAÇÃO");
console.log(" * * * *");

let readlineSync = require('readline-sync');
let tentativa_print = 1;
let  tentativas = 0;
let numero_secreto = 0;
const pontos = 100;
let nivel_escolhido = 0;
let n1 = 0;

console.log("dificuldade do jogo");
console.log("1 - Fácil, 2 - Médio, 3 - Díficil");
nivel_escolhido = parseInt(readlineSync.question("Qual nível você escolhe: "));

if (nivel_escolhido == 1){
    tentativas = 20;
}
else if(nivel_escolhido == 2){
    tentativas = 10;
}
else if(nivel_escolhido == 3){
    tentativas = 5
}
else if (nivel_escolhido <0 || nivel_escolhido >=4){
    console.log("Escolha a dificuldade  plz");
}

console.log(`${numero_secreto}`);

for ( i = 0; i<tentativas; i++ ){
    console.log(" ");
    console.log(`Numero da tentativa ${tentativa_print} do total de ${tentativas}`);
    
    n1 = parseInt(readlineSync.question("Digite um numero de 1 a 100:"));

    if( n1 < 1 || n1 > 100){
        console.log("Você deve digitar u número entre 1 e 100 por oqséquio");
        tentativa_print = tentativa_print + 1;
        continue;
    }

const acertou = n1 == numero_secreto;
const maior = n1 > numero_secreto;
const menor = n1 < numero_secreto;

if(acertou){
    console.log("Você acertou o número secreto");
    break;
}
else{
    if(menor){
        console.log("Você errou, mas a sua escolha é menor que o número secreto !!!");
    }
    else if(maior){
        console.log("Você errou, mas a sua escolha é maior que o número secreto !!!");  
    }
}

















    
}













