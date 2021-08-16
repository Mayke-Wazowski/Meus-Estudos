console.log(`Trabalhando com Condicinais`);


const listaDeDistinos = new Array(
    "Salvador",
    "Sãopaulo",
    "RiodeJaneiro",
    `Curitiba`
);

const idadeComprador = 18;  
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "Curitiba";

console.log("\n************************************************************");
console.log("                    Destinos possíveis:\n");
console.log(listaDeDistinos);
console.log("\n************************************************************\n");


const podeComprar = idadeComprador >= 16 || estaAcompanhada == true;
   
let contador = 0;
let destinoExiste = false;

    while (contador <= 3){

        if(listaDeDistinos[contador] == destino){
        // console.log("Destino existe");
            destinoExiste = true;
            break;   
        }
        contador = contador + 1;
    }

console.log(`Destino escolhido: ${destino}`,destinoExiste);
console.log("");

    if(podeComprar && destinoExiste){
        console.log("Condições para viagem aceitas  :)");
        console.log("* * * BOA VIAGEM * * *");
    }
    else{
        console.log("Desculpe, mas ocorreu um erro !!!");
    }


for(let cont = 0; cont <= 3; cont ++ ){

    if(listaDeDistinos[cont] == destino){
       // console.log("Destino existe");
        destinoExiste = true;
        break;   
    }   
} 
