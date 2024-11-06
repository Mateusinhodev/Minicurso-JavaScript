/* VARIÁVEIS */

// Variáveis são espaços de memórias que armazenam dados. 

/* Declaração de Variáveis: var, let ou const? */

// VAR: Pode ser redeclarada, pode ter seu valor alterado, não respeita escopo de bloco, mas respeita escopo de função.
var saudacao = "Olá";
var saudacao = "Oi"; // Redeclaração permitida
console.log(saudacao)

// LET: Não pode ser redeclarada, pode ter seu valor alterado e respeita o escopo de bloco.

let mensagem = "Bom dia";
mensagem = "Good Nigth" // Tendo seu valor alterado
console.log(mensagem)

// CONST: Não pode ser redeclarada, o seu valor não se altera, ela é “constante” e respeita o escopo bloco.

const pi = 3.14; 
// pi = 3.1415; // Erro: não é possível reatribuir uma constante
console.log(pi)

/* ESCOPOS */

// É o contexto no qual uma váriavel é acessível em seu código. São 3 tipos de escopo:

// ESCOPO GLOBAL: Variáveis declaradas fora de qualquer função ou bloco {}
// ESCOPO de FUNÇÃO: Variáveis declaradas dentro de uma função são acessíveis apenas dentro dessa função.
// ESCOPO de BLOCO: blocos são definidos por {} (ex.: if, for, while). let e const respeitam o escopo de bloco, enquanto var não respeita.


// >>>>> Exemplo com VAR <<<<<

if(true) {
    var nome = "Mateus"; // `var` não respeita o escopo de bloco
}
console.log(nome); // "Mateus" - A variável `nome` é acessível fora do bloco `if`

// >>>>> Exemplo com LET <<<<<

if(true) {
    let idade = 25; // `let` respeita o escopo de bloco
}
// console.log(idade); // Erro: `idade` não está definida fora do bloco `if`

// >>>>> Exemplo com CONST <<<<<

function msg() {
    const mensagem = "Olá, mundo!"; // `const` também respeita o escopo de bloco e de função
    console.log(mensagem); // "Olá, mundo!"
}

msg();

//   console.log(mensagem); // Erro: `mensagem` não está acessível fora da função