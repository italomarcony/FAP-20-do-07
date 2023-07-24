/* Crie um programa no qual o usuário deverá inserir os valores da altura, largura e
profundidade de uma caixa d’água, em cm. No final, exiba o volume dessa caixa d’água.
Dica: Volume = Altura x Largura x Profundidade  */

const prompt=require("prompt-sync")({sigint:true});

var altura, largura, profundidade, volume;

altura = parseFloat(prompt("Digite a altura em cm: "));
largura = parseFloat(prompt("Digite a largura em cm: "));
profundidade = parseFloat(prompt("Digite a profundidade em cm: "));

volume = altura * largura * profundidade;
console.log("O volume eh: " +volume+ "cm3");