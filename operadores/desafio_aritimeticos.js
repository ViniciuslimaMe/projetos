const velocidadeVia = 40;
let velocidade_Aferida = 48;
let velocidade_Considerada = velocidade_Aferida - 7;

if (velocidade_Aferida > 107) {
  velocidade_Considerada = velocidade_Aferida;
}

if (velocidade_Considerada > velocidadeVia && velocidade_Considerada <= velocidadeVia + velocidadeVia * 0.2) {
  console.log("Valor a ser pago: R$130.16");
} else if (velocidade_Considerada > velocidadeVia + velocidadeVia * 0.2 && velocidade_Considerada <= velocidadeVia + velocidadeVia * 0.5) {
  console.log("Valor a ser pago: R$195.23");
}
else if (velocidade_Considerada <= velocidadeVia){
console.log("passagem sem infração");
} 

else {
  console.log("Valor a ser pago: R$880.41");
}
