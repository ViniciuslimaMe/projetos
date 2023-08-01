//  Parâ,metro (nota) -> retorno (conceeito)
function notaPraConceito(nota) {

    switch(Math.ceil(nota)){

        case 10: return "A+";
        case 9: return "A";
        case 8: return "B+";
        case 7: return "B";
        default: return null;
    }
 
}

console.log(`O conceito da nota é: ${notaPraConceito(8.5)}`)