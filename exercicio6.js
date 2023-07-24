/* Crie um programa que peça para o usuário informar os valores da base e da altura de um
triângulo, em centímetros,, e então mostre na tela o valor da área desse triângulo.
Dica: Área do triângulo = Base x Altura / 2 */

const prompt=require("prompt-sync")({sigint:true});

var base, altura, areaTriangulo;

base = parseFloat(prompt("Digite o valor da base do triangulo em CM: "));
altura = parseFloat(prompt("Digite o valor da altura do triangulo em CM: "));

areaTriangulo = base * altura / 2;

console.log("O valor da area desse triangulo eh: " +areaTriangulo+ "cm");