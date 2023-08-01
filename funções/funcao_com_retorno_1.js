function sempreRetornaUm(){
    return 1000;
}

function textouOuNumero(retornaTexto){
    // return retornaTexto ? "Sou texto" : 123;
    if (retornaTexto) {

        return "Sou um texto";
    } else {
        return 123;
    }
}

let valor = sempreRetornaUm() + 1;

console.log(valor);


let texto = textouOuNumero(true);
console.log(texto);
console.log(textouOuNumero(false));