/* OPERADORES */

// Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muitos mais. São separados em 6 categorias:

/* OPERADORES ARITMÉTICOS (MATEMÁTICOS)  */

// +	Adição
// -	Subtração
// *	Multiplicação
// /	Divisão
// **	Exponenciação
// %	Resto da divisão
// --	Decremento
// ++	Incremento

let valor1 = 10;
let valor2 = 11;
let operacao;

operacao = valor1 + valor2; 
console.log(operacao);

/* OPERADORES de ATRUIBUIÇÃO  */

// =	Atribuição
// +=	Soma e atribuição
// -=	Subtração e atribuição
// *=	Multiplicação e atribuição
// /=	Divisão e atribuição
// %=	Resto da divisão e atribuição

valor1 += 1;
console.log(valor1)

/* OPERADORES de COMPARAÇÃO  */

// ==	Igualdade
// ===	Extritamente igual
// !=	Diferente
// !==	Extritamente diferente 
// >	Maior que
// <	Menor que
// >=	Maior ou igual a
// <=	Menor ou igual a

let comparacao;
comparacao = (valor1 == valor2); 
comparacao = (valor1 > valor2); 

console.log(comparacao);

/* OPERADORES de COMPARAÇÃO  */

// &&	E
// ||	Ou
// !	Negação

let idade, resultado;
idade = 65;
resultado = (idade > 60 && idade < 70); // true
resultado = (idade === 65 || idade === 72); // true
resultado = !(idade === 65); // false
console.log(resultado)

/* OPERADORES TERNARIO */

// ?	True
// :	False

let eleitor;
eleitor = (idade > 18) ? "Eleitor" : "Não eleitor";


/* OPERADORES de STRINGS  */

let nome = "Mateus";
let sobrenome = "Rodrigues";
console.log(nome + " " + sobrenome);




