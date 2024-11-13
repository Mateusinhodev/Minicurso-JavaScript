// Palavras para o jogo
const palavras = [
    "VAR", "LET", "CONST", "IF", "ELSE", "FOR", "WHILE", "BREAK", // Controle de fluxo e declaração de variáveis
    "ARRAY", "FUNCAO", "OBJETO", "STRING", "NUMBER", "TRUE", "FALSE", // Tipos de dados e estruturas
    "NULL", "LOOP", "ALERT", "CONSOLE" // Funções e objetos do JS
  ];
  
  // Variáveis para armazenar o estado do jogo
  let palavraSecreta,       // Palavra secreta escolhida aleatoriamente
      tentativasRestantes,  // Contador de tentativas restantes
      acertos,              // Array que armazena o progresso dos acertos (letras corretas ou traços)
      letrasUsadas;         // Array que armazena as letras que o jogador já usou
  
  // Seleção dos elementos HTML que serão manipulados
  const palavraElemento = document.getElementById("palavra");           // Exibe a palavra com os traços ou letras descobertas
  const mensagemElemento = document.getElementById("mensagem");         // Exibe a mensagem de vitória ou derrota
  const tentativasElemento = document.getElementById("tentativasRestantes");  // Exibe o número de tentativas restantes
  const botoesLetras = document.querySelectorAll(".letra");             // Todos os botões de letras (A-Z)
  const botaoReiniciar = document.getElementById("reiniciar");          // Botão para reiniciar o jogo
  
  // Inicializa o jogo com valores padrão e sorteia uma palavra secreta
  function inicializarJogo() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];  // Escolhe uma palavra aleatória
    tentativasRestantes = 6;                 // Inicializa com 6 tentativas
    acertos = Array(palavraSecreta.length).fill("_");  // Cria um array com o mesmo tamanho da palavra secreta, preenchido com "_"
    letrasUsadas = [];                       // Limpa as letras usadas do jogo
    atualizarPalavra();                      // Atualiza a exibição da palavra com os traços ("_")
    atualizarTentativas();                   // Atualiza o número de tentativas restantes na tela
    mensagemElemento.textContent = "";       // Limpa qualquer mensagem anterior
    botoesLetras.forEach(botao => {          // Habilita todos os botões de letras
      botao.disabled = false;
    });
  }
  
  // Atualiza a palavra na tela com as letras descobertas ou os traços
  function atualizarPalavra() {
    palavraElemento.textContent = acertos.join(" ");  // Junta os caracteres do array 'acertos' com espaços
  }
  
  // Atualiza o número de tentativas restantes na tela
  function atualizarTentativas() {
    tentativasElemento.textContent = tentativasRestantes;  // Exibe o número de tentativas restantes
  }
  
  // Verifica se a letra escolhida pelo jogador é correta
  function verificarLetra(letra) {
    // Se a letra já foi usada, a função termina para evitar repetição
    if (letrasUsadas.includes(letra)) return;  
    letrasUsadas.push(letra);  // Adiciona a letra ao array de letras usadas
  
    let acertou = false;       // Variável para verificar se a letra está na palavra secreta
    // Verifica se a letra escolhida está presente na palavra secreta
    for (let i = 0; i < palavraSecreta.length; i++) {  
      if (palavraSecreta[i] === letra) {  // Se a letra estiver na posição 'i' da palavra secreta
        acertos[i] = letra;               // Substitui o traço no array 'acertos' pela letra correta
        acertou = true;                   // Marca que houve um acerto
      }
    }
  
    if (acertou) {              // Se a letra foi correta
      atualizarPalavra();       // Atualiza a exibição da palavra com a letra descoberta
      verificarVitoria();       // Verifica se o jogador completou a palavra (vitória)
    } else {                    // Se a letra foi incorreta
      tentativasRestantes--;    // Reduz o número de tentativas restantes
      atualizarTentativas();    // Atualiza o número de tentativas restantes na tela
      verificarDerrota();       // Verifica se o jogador perdeu (sem tentativas restantes)
    }
  }
  
  // Verifica se o jogador venceu o jogo
  function verificarVitoria() {
    if (!acertos.includes("_")) {                       // Se não houver mais "_" no array 'acertos', o jogador venceu
      mensagemElemento.textContent = "Você venceu!";    // Exibe mensagem de vitória
      botoesLetras.forEach(botao => (botao.disabled = true));  // Desabilita os botões de letras para impedir mais cliques
    }
  }
  
  // Verifica se o jogador perdeu o jogo
  function verificarDerrota() {
    if (tentativasRestantes === 0) {  // Se o número de tentativas for zero
      mensagemElemento.textContent = `Você perdeu! A palavra era "${palavraSecreta}".`;  // Exibe a palavra secreta
      botoesLetras.forEach(botao => (botao.disabled = true));  // Desabilita os botões de letras para impedir mais cliques
    }
  }
  
  // Adiciona evento de clique para cada botão de letra
  botoesLetras.forEach(botao => {
    botao.addEventListener("click", () => {    // Adiciona evento de clique no botão
      botao.disabled = true;                   // Desabilita o botão após o clique
      verificarLetra(botao.dataset.letra);     // Chama a função 'verificarLetra' passando a letra escolhida pelo botão
    });
  });
  
  // Adiciona evento de clique para o botão de reiniciar o jogo
  botaoReiniciar.addEventListener("click", inicializarJogo);  // Chama a função de reinício do jogo
  
  // Inicializa o jogo assim que a página for carregada
  inicializarJogo();