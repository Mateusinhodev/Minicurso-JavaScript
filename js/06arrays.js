/* ARRAYS */

// É uma estrutura de dados que permite armazenar múltiplos valores em uma única variável.

let frutas = ['maça', 'banana', 'uva'];

/* ACESSANDO ELEMENTOS DE UM ARRAY */

// Cada valor é acessado através de um índice que representa sua posição no array.

frutas[0] // maça
frutas[1] // banana
frutas[2] // uva

/* PERCORRENDO ARRAY */

// >>>>> Utilizando o FOR

for(let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
}

// >>>>> Utilizando o forEACH

frutas.forEach(function(fruta) {
  console.log(fruta);
});

/* MÉTODOS DE ARRAY */

// frutas.sort() // Ordena o array
// frutas.reverse() // Inverte a ordem do array
// frutas.push("laranja") // Adiciona um novo elemento no final do array
// frutas.pop() // Remove o último elemento do array
// frutas.shift() // Remove o primeiro elemento do array
// frutas.unshift("laranja") // Adiciona um novo elemento no inicio do array
// frutas.splice(1, 1) // Remove um elemento elemento
// frutas.splice(1, 0, “banana") // Adiciona um elemento elemento
// frutas.slice(1, 2) // Retorna um novo array com os elementos selecionados
// frutas.concat("laranja") // Concatena dois arrays
// frutas.join(",") // Tranforma o array em uma string

console.log(frutas)
