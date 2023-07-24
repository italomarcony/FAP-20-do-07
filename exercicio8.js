//Crie um algoritmo que calcule o IMC. Pergunte o nome, idade, altura e peso.

const prompt=require("prompt-sync")({sigint:true});

var nomeCompleto, idade, altura, peso, imc;

nomeCompleto = prompt("Digite seu nome completo: ");
idade = parseInt(prompt("Digite sua idade: "));
altura = parseFloat(prompt("Digite sua altura em metros: "));
peso = parseFloat(prompt("Digite seu peso em Kg: "));

imc = peso / (altura * altura);

console.log("Nome:" + nomeCompleto);
console.log("Idade: " + idade);
console.log("Altura: " + altura);
console.log("Peso: " + peso);
console.log("IMC: " + imc.toFixed(2));
