/*
Q5. Faça um programa em Javascript que tenha o seguinte menu de entrada:
1 - Consultar infrações
2 - Inserir Multa
3 - Mostrar valor arrecadado
4 - Sair

No item de "Consultar infrações" será mostrado para o usuário as seguintes infrações:
001 - Passou em via com velocidade acima do limite - R$ 130,90
002 - Estacionou em local proibido - R$ 123,40
003 - Parou sobre a faixa de pedestre - R$ 50,90
004 - Transitar sem capacete - R$ 1170,45

No item de "Inserir Multa" o sistema pedirá a placa do veículo, o código da infração e a data da infração. 
O usuário poderá cadastrar quantas multas ele quiser, enquanto não sair do sistema. 
Caso a mesma placa seja inserida uma segunda vez, e tenha a mesma infração, o valor da multa será dobrado (na terceira vez em diante também com valor dobrado).

No item "Mostrar valor arrecadado" será requisitado um periodo com data inicial e final de análise, e então deverá ser apresentado um relatório no seguinte formato:

Data            Placa           Descrição da infração           					Valor
01/01/2023		ABC1234			Passou em via com velocidade acima do limite		130,90
01/02/2023		DEF3445			Transitar sem capacete								1170,45
05/01/2023		PKT1123			Transitar sem capacete								1170,45
01/02/2023		ABC1234			Parou sobre a faixa de pedestre						50,90
02/02/2023		ABC1234			Parou sobre a faixa de pedestre						101,80
03/02/2023		ABC1234			Parou sobre a faixa de pedestre						101,80

Total arrecadado: 2726,3


Finalmente no item "Sair" o sistema irá ser finalizado, perdendo todos os valores cadastrados.*/

const prompt = require('prompt-sync')();

function exibirMenu() {
    console.log("Menu:\n");
    console.log("1 - Consultar infrações");
    console.log("2 - Inserir Multa");
    console.log("3 - Mostrar valor arrecadado");
    console.log("4 - Sair");
}

let infracoes = [
    { codigo: "001", "Passou em via com velocidade acima do limite", valor: 130.90 },
    { codigo: "002", "Estacionou em local proibido", valor: 123.40 },
    { codigo: "003", "Parou sobre a faixa de pedestre", valor: 50.90 },
    { codigo: "004", "Transitar sem capacete", valor: 1170.45 }
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
        console.log(`${infracao.codigo} - ${infracao.texto} - R$ ${infracao.valor.toFixed(2)}`);
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
    return infracao ? infracao.texto : "";
}