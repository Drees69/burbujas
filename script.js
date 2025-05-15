function playMusic() {
  const audio = document.getElementById('bg-music');
  audio.muted = false;
  audio.play();
}

// Lista de mensajes de amor
const messages = [
  "Te amo 💖",
  "Eres mi todo 🌟",
  "Perdóname 🙏",
  "Siempre tú 💌",
  "Por siempre juntos 💍",
  "Tú y yo ❤️"
];

// Función para crear una burbuja
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  // Posición y estilo aleatorio
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
  bubble.style.fontSize = `${12 + Math.random() * 10}px`;

  document.getElementById('bubble-container').appendChild(bubble);

  // Eliminar la burbuja después de un tiempo
  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

// Crear burbujas continuamente
setInterval(createBubble, 1000);
