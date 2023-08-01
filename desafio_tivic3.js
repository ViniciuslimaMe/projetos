/*Q4.  Agora faça um programa em Javascipt que monte um menu no seguinte formato:

1 - Criar Login
2 - Logar
3 - Sair

E irá esperar o usuário digitar uma das opções (1, 2 ou 3). Caso ele digite qualquer coisa diferente o sistema irá mostrar uma mensagem de erro e irá pedir para digitar novamente.
No primeiro item "1 - Criar Login" o sistema irá requisitar um usuário e uma senha, e irá armazenar isso, retornando ao menu. O usuário poderá cadastrar quantos usuários quiser.
Já ao escolher o segundo item "2 - Logar" o usuário precisará digitar um usuário e senha que foi registrado por ele anteriormente. Caso digite corretamente o sistema irá imprimir
a mensagem "Acesso liberado" e irá retornar ao menu. Caso digite incorretamente irá imprimir a mensagem "Usuário ou senha inválidos. Tente novamente" e irá pedir para digitar
até o usuário acertar. Caso ele escolha o terceiro "3 - Sair" o sistema irá fechar. */

const prompt = require('prompt-sync')();

let usuarios = {};

function exibirMenu() {
  console.log("Menu:\n");
  console.log("1 - Criar Login");
  console.log("2 - Logar");
  console.log("3 - Sair");
}
function criarLogin() {
  let usuario = prompt("Digite o usuário: ");
  let senha = prompt("Digite a senha: ");

  usuarios[usuario] = senha;
  console.log("Login criado com sucesso!");
}

function logar() {
  let usuario = prompt("Digite o usuário: ");
  let senha = prompt("Digite a senha: ");

  if (usuarios[usuario] === senha) {
    console.log(" \n Acesso liberado");
  } else {
    console.log("\nUsuário ou senha inválidos. Tente novamente.");
  } 

}

function executarOpcao(opcao) {
  switch (opcao) {
    case "1":
      criarLogin();
      break;
    case "2":
      logar();
      break;
    case "3":
      console.log("\n Saindo ...");
      return;
    default:
      console.log("Opção inválida. Tente novamente.\n ");
  }

  exibirMenu();
  let novaOpcao = prompt("Digite a opção desejada: ");
   executarOpcao(novaOpcao);
}

 exibirMenu();
let opcao = prompt("Digite a opção desejada: ");
executarOpcao(opcao);