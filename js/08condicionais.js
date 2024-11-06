/* ESTRUTURAS CONDICIONAIS */

/* If Else */

// Use if para verificar uma condição e else para executar um código alternativo caso a condição seja falsa.

const idade = 18;

if(idade >= 18) {
	console.log("Você é maior de idade");
} else {
	console.log("Você é menor de idade");
}

/* Else IF */

// Permite adicionar quantas verificações forem necessárias antes de tomar uma decisão final. 

const media = 85

if(media >= 60 && media <= 100) {
	console.log("Aprovado");
} else if (media >= 30 ) {
	console.log("Prova final");
} else {
	console.log("REPROVADO");
}

/* Switch Case */

// É uma forma mais organizada de lidar com múltiplas condições

const dia = 3;

switch(dia) {
	case 1: 
		console.log("Domingo");
		break;
	case 2: 
		console.log("Segunda");
		break;
	case 3: 
		console.log("Terça");
		break;
	case 4: 
		console.log("Quarta");
		break;
	case 5: 
		console.log("Quinta");
		break;
	case 6: 
		console.log("Sexta");
		break;
	case 7: 
		console.log("Sábado");
		break;
}

/* Operador Ternário */

// Retorna um valor se a condição for verdadeira e outro se for falsa.

const maiorDeIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(maiorDeIdade);