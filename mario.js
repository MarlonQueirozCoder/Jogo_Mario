const mario = document.querySelector('.mario');
const fantasma = document.querySelector('.pipe');
const gameOverScreen = document.querySelector('.game-over');
const restartButton = document.querySelector('#restart');
const music = document.querySelector('#bg-music');
const music1 = document.querySelector('#bg-music1');
const music2 = document.querySelector('#salto');

let gameOver = false;
let musicStarted = false;

// ===== PULO DO MARIO =====
const jump = () => {
  if (gameOver) return;

  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }

  if (!mario.classList.contains('jump')) {
    mario.classList.add('jump');
     salto.currentTime = 0;
  salto.play().catch(() => {});
    setTimeout(() => mario.classList.remove('jump'), 500);
  }
};

document.addEventListener('keydown', jump);

// ===== LOOP / COLISÃO =====
const loop = setInterval(() => {
  const fantasmaPosition = fantasma.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  if (
    fantasmaPosition <= 120 &&
    fantasmaPosition > 0 &&
    marioPosition < 80
  ) {
    fimDeJogo();
  }
}, 10);


// ===== FIM DE JOGO =====
function fimDeJogo() {
  if (gameOver) return;  // garante que não roda mais de uma vez
  gameOver = true;

  // para animações
  fantasma.style.animation = 'none';
  mario.style.animation = 'none';

  mario.src = '/imagens/mariolose.png';
  mario.style.width = '75px';

  // para música normal
  music.pause();
  music.currentTime = 0;


    music1.currentTime = 0;
  music1.play().catch(() => {});
  

  
  // mostra tela de game over
  gameOverScreen.classList.add('show');

  clearInterval(loop);
}


// ===== RESTART =====
restartButton.addEventListener('click', () => {
  location.reload();
});
