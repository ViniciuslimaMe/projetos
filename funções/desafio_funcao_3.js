const nota1 = 3.1; 
const nota2 = 8.1;
const nota3 = 9.1; 

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
   
}

// function media(n1, n2, n3) {
//     const menorNota = minimo(n1, minimo(n2, n3));

//     if(menorNota === n1) {

//         return (n2 + n3) / 2
//     }
// }

//console.log(media(nota1, media(nota2, nota3)));
console.log(`Resultado mínimo é: ${(minimo(nota1, minimo(nota2, nota3)))}`);