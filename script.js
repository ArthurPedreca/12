let bola = document.createElement('canvas');
bola.style.width = '150px';
bola.style.height = '150px';
bola.style.backgroundColor = 'red';
bola.style.borderRadius = '50%';
bola.style.position = 'absolute';

document.body.appendChild(bola);

let velocidadeX = 0;
let velocidadeY = 0;

function mover() {
  let left = parseInt(bola.style.left) || 0;
  let top = parseInt(bola.style.top) || 0;
  
  left += velocidadeX;
  top += velocidadeY;
  
  bola.style.left = left + 'px';
  bola.style.top = top + 'px';
  
  requestAnimationFrame(mover);
}

function atualizarVelocidade() {
    velocidadeX = 0;
    velocidadeY = 0;
  
    if (teclasPressionadas['d']) {
      velocidadeX = 10;
    }
    if (teclasPressionadas['a']) {
      velocidadeX = -10;
    }
    if (teclasPressionadas['s']) {
        velocidadeY = 10
    }
    if (teclasPressionadas['w']) {
        velocidadeY = -10
    }
  }

let teclasPressionadas = {};

window.addEventListener('keydown', (event) => {
    teclasPressionadas[event.key] = true;
    atualizarVelocidade(); 
  }
);

window.addEventListener('keyup', (event) => {
  teclasPressionadas[event.key] = false;
  atualizarVelocidade();
});

mover();
