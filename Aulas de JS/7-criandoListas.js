// O QUE APRENDEMOS NESSE TÓPICO

// Criação de Arrays;
// Inserção de itens em um array;
// Array splice;
// Palavras reservadas;
// Indices do array;

console.log(`Trabalhando com listas`);

// ctrl + K + C  -- coloca tudo selecionado como comentário
// ctrl + K + U  -- Desfaz a seleção
 const salvador = 'Salvador';
// const saoPaulo = `SãoPaulo`;
// const rioDeJaneiro =`RioDeJaneiro` ;
// const brasilia = `Brasília`;

const listaDeDistinos = new Array(
    "Salvador",
    "Sãopaulo",
    "RiodeJaneiro",
    `Curitiba`
)
listaDeDistinos.push(`Montalvãnia`);// Adicionado itens na lista
console.log("Destinos possíveis: ");
console.log(listaDeDistinos);
 
listaDeDistinos.splice(1,1);
console.log(listaDeDistinos);

// para acessar um item em espécisfico da lista
console.log(listaDeDistinos[1]);

// lenght para saber quantos arquivos tem na lista
console.log(listaDeDistinos.length);
