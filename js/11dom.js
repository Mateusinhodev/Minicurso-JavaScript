/* MANIPULANDO O DOM */

// O DOM(Document Object Model) é a estrutura de uma página web que transforma o HTML em objetos que podem ser acessados e manipulados pelo JavaScript.

/* Acessando Elementos */

// getElementById(): Seleciona um elemento pelo seu atributo id.
// getElementsByClassName(): Seleciona todos os elementos que possuem a mesma classe como identificador.
// getElementsByTagName(): Seleciona todos os elementos que possuem uma determinada tag, como <div>, <p>, ou <span>.
// querySelector(): Seleciona o primeiro elemento que corresponde a um seletor CSS (`id`, `classe`, ou `tag`).
// querySelectorAll(): Seleciona todos os elementos que correspondem a um seletor CSS (`id`, `classe`, ou `tag`).

const titulo = document.getElementById("titulo");
const paragrafos = document.querySelectorAll("p");

/* Inserindo Mensagem na Tela com o DOM */

titulo.innerHTML = "Mini Curso JS"
titulo.style.color = "purple"
titulo.style.textAlign = "center"