/* LAÇOS DE REPETIÇÃO */

// >>>> FOR: Utilizado quando você sabe quantas vezes quer repetir um bloco de código.

for(let i = 0; i < 5; i++) {
	console.log(i);
}

// Saída: 0, 1, 2, 3, 4

// Laço while: Repete um bloco de código enquanto uma condição especificada for verdadeira.

let i = 0;
while(i < 5) {
	console.log(i);
	i++;
};

// Saída: 0, 1, 2, 3, 4


// Laço do…while: É semelhante ao while, mas a condição é verificada após a execução do bloco de código.

let x = 0;
do {
	console.log(x);
	x++;
} while (i < 5);

// Saída: 0, 1, 2, 3, 4

// forEach: Método usado para executar uma função em cada item de um array.

const array = [1, 2, 3, 4, 5];
array.forEach((valor) => {
	console.log(valor);
});

// Saída: 1, 2, 3, 4, 5