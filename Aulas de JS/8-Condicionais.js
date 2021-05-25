console.log(`Trabalhando com Condicinais`);


const listaDeDistinos = new Array(
    "Salvador",
    "Sãopaulo",
    "RiodeJaneiro",
    `Curitiba`
);

const idadeComprador = 16;
const estaAcompanhada = true;
const passagemComprada = true;
console.log("\n************************************************************");
console.log("                    Destinos possíveis:\n");
console.log(listaDeDistinos);
console.log("\n************************************************************\n");


//if (idadeComprador >= 18) {
//     console.log("Pode comprar as passagens");
//     // remove 1 elemento a partir do indice 1.
//     listaDeDistinos.splice(1, 1);
//     console.log(listaDeDistinos);
// }
// else if (estaAcompanhada) {
//     console.log("O comprador está acompanhdo");
//     // remove 1 elemento a partir do indice 1.
//     listaDeDistinos.splice(1, 1);
// }
// else {
//     console.log("Não posso vender as passagens para você !!!");
//     console.log("");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem, obrigado volte sempre !!!");
    // remove 1 elemento a partir do indice 1.
    listaDeDistinos.splice(2, 1);
}
else {
    console.log("Não posso vender as passagens para você !!!\n");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && passagemComprada){
    console.log("Pode embarcar, Boa viagem !!!")
}
else{
    console.log("Você não pode embarcar");

}






console.log("");
console.log("");
console.log(`Passagens ainda disponiveis ${listaDeDistinos}`);
console.log("");
console.log("");

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);



