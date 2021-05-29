var conteudo_caixa = document.getElementById("caixa_azul").innerText;

document.getElementById("caixa_amarela").innerHTML = "<font color= blue><b>"+conteudo_caixa+"<b>";
//document.getElementById("caixa_amarela").innerHTML = "<h1>" + conteudo_caixa + "</h1>";    

console.log(conteudo_caixa); 
function teste(i,j) {
    // let x = 8;
    // let w = 3;  
    //let mult = x * w;
    mult = i * j;
    console.log(mult);
}

teste( 1, 2);