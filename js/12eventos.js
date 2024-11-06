/* EVENTOS */

// Eventos são ações disparadas pela interação dos usuários na página.

// Os tipos de Eventos são:

// onclick: Disparado quando recebe um clique.
// ondblclick: Disparado quando clique duplo.
// onmouseover: Disparado quando o mouse está sobre.
// onmousemove: Disparado quando o mouse é movido no elemento.
// onmousedown: Disparado quando o clique do botão foi pressionado.
// onmouseup: Disparado quando o clique do botão é liberado.
// onfocus: Disparado quando o elemento recebe o foco.
// onchange: Disparado quando existe uma mudança no conteúdo.
// onblur: Disparado quando o elemento perde o foco.
// onkeydown: Disparado quando uma tecla é pressionada.
// onkeypress: Disparado quando uma tecla é pressionada e solta.
// onkeyup: Disparado quando uma tecla é solta sobre um elemento.
// onload: Disparado quando a página terminou de ser carregada.
// onresize: Disparado quando há um redimencionamento da janela.

/* addEventListener */

// O addEventListener é um método que permite adicionar eventos a um elemento HTML

// A sintaxe é:

// element.addEventListener(event, function);

// element: É aqui que você aponta para o elemento HTML que receberá o método addEventListener;
// addEventListener: Um método(função) que adiciona o manipulador de eventos ao elemento especificado;
// event: Tipo do evento (ex: “click”, “submit”, “mousedown”).;
// function: A função que queremos executar quando o evento acontecer;

const msg = document.getElementById("mensagem");
msg.addEventListener('click', function() {
    alert("Olá mundo!");
});