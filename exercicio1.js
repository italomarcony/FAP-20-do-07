// algoritmo que perguntar nome e sobrenome e mostra o nome completo na tela

var nome, sobrenome, nomeCompleto;

const prompt=require("prompt-sync")({sigint:true});

nome = prompt('Digite seu nome: ');
sobrenome = prompt('Digite seu nome: ');
nomeCompleto = nome + " " + sobrenome;

console.log("",nomeCompleto);