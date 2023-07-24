/* var numero1, numero2, soma, subtracao, divisao, multiplicacao, operacao, resultado;

const prompt=require("prompt-sync")({sigint:true});

operacao = prompt("Qual operacao vc quer relizar? soma, subtracao, divisao ou multiplicacao: ");

numero1 = parseFloat(prompt('Digite o primeiro numero: '));
numero2 = parseFloat(prompt('Digite o segundo numero: '));

if (operacao === "soma") {
    resultado = numero1 + numero2;
}   else if (operacao === "subtracao") {
    resultado = numero1 - numero2;
}   else if (operacao === "divisao") {
    resultado = numero1 / numero2;
}   else if (operacao === "multiplicacao") {
    resultado = numero1 * numero2;
} else {
    console.log("Operacao nao existe. Tente novamente");
}

if (resultado !== undefined) {
    console.log("O resultado da " + operacao + " eh:" + resultado);
} */

const prompt=require("prompt-sync")({sigint:true});

function soma(a, b) {
    return a + b;
  }
  
  
  function subtracao(a, b) {
    return a - b;
  }
  
  
  function divisao(a, b) {
    return a / b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  var numero1, numero2, soma, subtracao, divisao, multiplicacao, operacao, resultado;

  var operacao = prompt("Escolha a operação desejada: soma, subtracao, divisao ou multiplicacao: ");
  
  
  var numero1 = parseFloat(prompt("Digite o primeiro número:"));
  var numero2 = parseFloat(prompt("Digite o segundo número:"));
  
  var resultado;
  

  switch (operacao) {
    case "soma":
      resultado = soma(numero1, numero2);
      break;
    case "subtracao":
      resultado = subtracao(numero1, numero2);
      break;
    case "divisao":
      resultado = divisao(numero1, numero2);
      break;
    case "multiplicacao":
      resultado = multiplicacao(numero1, numero2);
      break;
    default:
      console.log("Operacao nao existe. Tente novamente.");
      break;
  }
  
  // Exibe o resultado na tela
  if (resultado !== undefined) {
    console.log("O resultado da " + operacao + " é: " + resultado);
  }
  




