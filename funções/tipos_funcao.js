// Primeiro caso, funcão COM parâmetros e COM retorno
function somar (a, b){
    return a + b;
}

let resultado = somar(30, 19);
// console.log(resultado);  -> =uma das maneiras
console.log(`O resultado final é: ${resultado}`);


// Segundo caso, função com parâmetros e sem retorno
 
function exibirMultiplicacao (a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 34);
exibirMultiplicacao(5, 9);

// Terceiro caso, função SEM parâmetros e COM retorno

function retornaDataAtual() {
    return new Date();
}
console.log(retornaDataAtual());


// Quarto caso, função SEM parâmetros e SEM retorno
function exibirHoraAtual(){
    console.log(new Date(). getHours());
}

exibirHoraAtual();
