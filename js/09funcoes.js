/* FUNÇÕES */

// é um bloco de código projetado para executar uma terefa especifica. 


// Sintaxe da FUNÇÃO

function saudacao() {
	console.log("Olá mundo!");
}

saudacao();

// ARROW FUNCTION: É uma sintaxe mais curta para declarar funções.

const saudar = () => { console.log("Olá Mundo"); }


saudar();

// Função Construtoras:  São usadas para criar objetos.

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
   
const pessoa1 = new Pessoa("Mateus");
console.log(pessoa1.nome);


