const messages = [
  "Te amo con todo mi corazón ❤️",
  "Eres mi razón de sonreír 😊",
  "Contigo todo es mejor 💕",
  "Cada día te quiero más 💌",
  "Eres mi sol en días nublados ☀️",
  "Siempre serás mi persona favorita 🥰",
  "Quiero un para siempre contigo 💍",
  "Tú y yo, por siempre ❤️",
];

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
  bubble.style.fontSize = `${12 + Math.random() * 10}px`;

  document.getElementById('bubble-container').appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

setInterval(createBubble, 800);
