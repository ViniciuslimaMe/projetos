//- Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.


// let baseTriangulo = 5;
// let alturaTriangulo = 8;


// console.log(`A área do triângulo é: ${baseTriangulo * alturaTriangulo / 2}`);








// - Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).


                                                                 // Para converter graus Celsius em graus Fahrenheit, multiplique por 1,8 e adicione 32.    
//   function fahrenheit_Celsius(fahrenheit) {                // Para converter graus Fahrenheit em graus Celsius, subtraia 32 e divida por 1,8.
//     const celsius = (fahrenheit - 32) / 1.8;
//    return celsius;
//   }
  
//   const fahrenheitTemp = 68;
//   const celsiusTemp = fahrenheit_Celsius(fahrenheitTemp);
//   console.log(`${fahrenheitTemp} graus Fahrenheit são aproximadamente ${celsiusTemp.toFixed(2)} graus Celsius.`);
  

const prompt = require('prompt-sync')();


function exibirMenu() {
    console.log("Menu:\n");
    console.log("1 - Consultar infrações");
    console.log("2 - Inserir Multa");
    console.log("3 - Mostrar infração e valor arrecadado");
    console.log("4 - Sair");
}


let infracoes = [
    { codigo: "001", descricao: "Passou em via com velocidade acima do limite", valor: 130.90 },
    { codigo: "002", descricao: "Estacionou em local proibido                ", valor: 123.40 },
    { codigo: "003", descricao: "Parou sobre a faixa de pedestre             ", valor: 50.90 },
    { codigo: "004", descricao: "Transitar sem capacete                      ", valor: 1170.45 }
];


let multas = [];


exibirMenu();
let opcao = prompt("Digite a opção desejada: ");
executarOpcao(opcao);


function executarOpcao(opcao) {
    switch (opcao) {
        case "1":
            consultarInfracoes();
            break;
        case "2":
            inserirMultas();
            break;
        case "3":
            valorArrecadado();
            break;
        case "4":
            console.log("\nSaindo ...");
            return;
        default:
            console.log("Opção inválida. Tente novamente.\n");
    }


    exibirMenu();
    opcao = prompt("Digite a opção desejada: ");
    executarOpcao(opcao);
}


function consultarInfracoes() {
    console.log("\nInfrações:\n");
    for (let i = 0; i < infracoes.length; i++) {
        const infracao = infracoes[i];
        console.log(`${infracao.codigo} - ${infracao.descricao} - R$ ${infracao.valor.toFixed(2)}`);
    }
}


function inserirMultas() {
    let placa = prompt("Digite a placa do veículo: ");
    let codigo = prompt("Digite o código da infração: ");


    let multaExistente = multas.find(multa => multa.placa === placa && multa.codigo === codigo);
    if (multaExistente) {
        multaExistente.valor *= 2;
        console.log("Valor da multa atualizado.");
    } else {
        let infracao = infracoes.find(infracao => infracao.codigo === codigo);
        if (infracao) {
            multas.push({ placa, codigo, valor: infracao.valor });
            console.log("Multa inserida no sistema.");
        } else {
            console.log("Infração inválida. Tente novamente.\n");
        }
    }
}


function valorArrecadado() {
    let totalArrecadado = 0;


    console.log("\nRelatório:\n");
    console.log("Placa\t\tDescrição da infração\t\t\tValor");
    for (let i = 0; i < multas.length; i++) {
        const multa = multas[i];
        console.log(
            `${multa.placa}\t${obterDescricaoInfracao(multa.codigo)}\t\tR$ ${multa.valor.toFixed(2)}`
        );
        totalArrecadado += multa.valor;
    }


    console.log("\nTotal arrecadado: R$", totalArrecadado.toFixed(2));
}


function obterDescricaoInfracao(codigo) {
    let infracao = infracoes.find(infracao => infracao.codigo === codigo);
    return infracao ? infracao.descricao : "";
}


