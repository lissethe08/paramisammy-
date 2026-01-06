function openEnvelope() {
  document.querySelector('.envelope').classList.toggle('open');
}

/* FLORES Y CORAZONES */
const emojis = ['❤️', '🌸', '🌷', '💐', '💖'];

function createFloat() {
  const item = document.createElement('div');
  item.classList.add('float');
  item.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  item.style.left = Math.random() * 100 + 'vw';
  item.style.animationDuration = (Math.random() * 3 + 5) + 's';

  document.body.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 8000);
}

setInterval(createFloat, 450);
