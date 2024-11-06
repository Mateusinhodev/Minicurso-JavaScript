/* TIPOS DE DADOS */

// Number:  Representa valores númericos, seja inteiros ou decimais

let numero = 11; 
let altura = 1.56; 

// String: É usado para representar texto.

const nome = "Mateus";
const mensagem = `Olá ${nome}`; // Template string

// Boolean: Representa apenas dois valores lógicos: true (verdadeiro) ou false (falso).

const maiorDeIdade = true;
const possuiPassagem = false;

// Nuul: Um valor que representa “vazio” ou “nulo”;

let valorNulo = null;

// Undefined Uma variável que foi declarada, mas não foi atribuida nenhum valor.

let valorIndefinido; 

// Object: São usados para armazenar coleções de dados e entidades mais complexas.

const pessoa = {
	name: "Mateus",
	idade: 21,
	profissao: "Futuro Programador"
};

// >>>>> DESCOBRINDO O TIPO DE DADO DE UMA VARIAVEL <<<<<

console.log(typeof nome);