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
    idade = 25; // `let` respeita o escopo de bloco
}

console.log(idade); // Erro: `idade` não está definida fora do bloco `if`

// >>>>> Exemplo com CONST <<<<<

function saudacao() {
    const mensagem = "Olá, mundo!"; // `const` também respeita o escopo de bloco e de função
    // console.log(mensagem); // "Olá, mundo!"
  }
saudacao();

//   console.log(mensagem); // Erro: `mensagem` não está acessível fora da função