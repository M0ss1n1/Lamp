
const lampada = document.getElementById('lampada');
const btn = document.getElementById('btn');
let ligada = false;

function ligarDesligarLampada() {
  ligada = !ligada;
  if (ligada) {
    lampada.src = 'on.png';
    btn.src = 'btn.png';
    lampada.style.animation = "opacidade-animation .3s linear forwards";
    lampada.classList.add('brilho');
  } else {
    lampada.src = 'off.png';
      btn.src = 'btn.png';
    lampada.style.animation = "opacidade-animation1 .3s linear forwards";
    lampada.classList.remove('brilho'); 
  }
}

function quebrarLampada() {
  if (ligada) {
    alert('Você quebrou a lâmpada!');
    lampada.src = 'Broke.png';
    btn.removeEventListener('click', ligarDesligarLampada);
    btn.removeEventListener('dbclick', quebrarLampada);
    lampada.removeEventListener('dblclick', quebrarLampada);
    lampada.classList.remove('brilho');

    setTimeout(() => {
      location.reload()
    }, 1500);
  }
}

btn.addEventListener('click', ligarDesligarLampada);
btn.addEventListener('dblclick', quebrarLampada);
lampada.addEventListener('dblclick', quebrarLampada);
