const prompt = require('prompt-sync')();

let usuarios = 0;

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
    console.log("Acesso liberado");
  } else {
    console.log("Usuário ou senha inválidos. Tente novamente.");
    logar();
  }
}

function exibirMenu() {
    console.log("Seja bem-vindo");  
    console.log("Menu:");
 console.log("1 - Criar Login");
  console.log("2 - Logar");
  console.log("3 - Sair");
}

function executarOpcao(opcao) {
  switch (opcao) {
    case "1":
      criarLogin();
      break;
    case "2":
      logar();
      console.log("Seja bem-vindo");
      break;
    case "3":
      console.log("Saindo do programa...");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
  }

  exibirMenu();
  let novaOpcao = prompt("Digite a opção desejada: ");
  executarOpcao(novaOpcao);
}

exibirMenu();
let opcao = prompt("Digite a opção desejada: ");
executarOpcao(opcao);   