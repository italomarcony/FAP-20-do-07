// Escreva um algoritmo que leia dois valores numéricos e depois mostre a diferença entre eles (o primeiro menos o segundo).

var n1, n2, soma, resultado;

const prompt=require("prompt-sync")({sigint:true});

n1 = parseFloat(prompt('Infome um valor: '));
n2 = parseFloat(prompt('Infome um valor: '));
soma = n1 - n2;
resultado = soma;

console.log("",resultado);
