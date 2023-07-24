/* O sistema de avaliação de determinada disciplina é composto por três provas. A primeira
prova tem peso 2, a segunda tem peso 3 e a terceira tem peso 5.
Elabore um algoritmo que calcule a média final de um aluno desta disciplina.
Dica: Neste caso você irá usar uma Média Aritmética Ponderada. Caso tenha dúvidas sobre
esse tipo de cálculo, recomendo assistir a esse vídeo: Média Ponderada – Como calcular
 */

const prompt=require("prompt-sync")({sigint:true});

var n1, n2, n3, peso1, peso2, peso3, media;

n1 = parseFloat(prompt("Digite a primeira nota"));
n2 = parseFloat(prompt("Digite a segunda nota"));
n3 = parseFloat(prompt("Digite a terceita nota"));

peso1 = 2;
peso2 = 3;
peso3 = 5;

media = (n1 * peso1 + n2 * peso2 + n3 * peso3) / (peso1 + peso2 + peso3);
console.log("A media eh: ",media);