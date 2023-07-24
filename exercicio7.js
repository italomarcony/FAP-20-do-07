//Crie um algoritmo que informe um número e apresente se é impar ou par.


const prompt=require("prompt-sync")({sigint:true});

var numero;

numero = parseInt(prompt("Digite o numero:"));

if (numero % 2 === 0) {
    console.log(numero+ " eh um numero par.");
    
} else {
    console.log(numero+ " eh um numero impar.");
}