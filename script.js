// script.js

// 1. Defina aqui a sua lista de frases
const messages = [
    "Você e Linda",
    "Eu gosto de você",
    "Seu sorriso ilumina meu dia",
    "Penso em você sempre",
    "Você me faz feliz"
];

// 2. Pegamos o elemento da frase no HTML
const phraseElement = document.querySelector('.phrase');

// 3. Criamos um contador para saber qual frase mostrar
let messageIndex = 0;

// 4. Função para mudar a frase
function changeMessage() {
    // Esconde a frase atual (fica transparente)
    phraseElement.style.opacity = 0;

    // Espera a transição de fade-out terminar (meio segundo)
    setTimeout(() => {
        // Atualiza o contador para a próxima frase
        messageIndex = (messageIndex + 1) % messages.length; // O '%' faz com que volte ao início da lista

        // Troca o texto do elemento HTML
        phraseElement.textContent = messages[messageIndex];

        // Mostra a nova frase (fica visível)
        phraseElement.style.opacity = 1;
    }, 500); // 500ms = 0.5s, mesmo tempo da transição no CSS
}

// 5. Inicia o ciclo
// A cada 4 segundos (4000 milissegundos), a função changeMessage será chamada
setInterval(changeMessage, 4000);