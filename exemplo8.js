const PONTOS_DESTAQUE = 5;

let placar = { A: 0, B: 0 };
let segundos = 0;
let intervalo = null;

function formatar(s) {
  const min = String(Math.floor(s / 60)).padStart(2, '0');
  const seg = String(s % 60).padStart(2, '0');
  return min + ':' + seg;
}

function registrar(texto) {
  const li = document.createElement('li');
  li.textContent = formatar(segundos) + ' - ' + texto;
  document.getElementById('lista').prepend(li);
}

function mudarPlacar(time, valor) {
  const novo = placar[time] + valor;

  if (novo < 0) return;

  placar[time] = novo;
  document.getElementById('placar' + time).textContent = novo;

  const card = document.getElementById('card' + time);
  card.classList.toggle('destaque', novo >= PONTOS_DESTAQUE);

  registrar(
    valor > 0
      ? 'Time ' + time + ' marcou +' + valor
      : 'Time ' + time + ' perdeu 1 ponto'
  );
}

function alternarCronometro() {
  const botao = document.getElementById('btnIniciar');

  if (intervalo) {
    // Pausar
    clearInterval(intervalo);
    intervalo = null;
    botao.textContent = 'Iniciar';
    registrar('Partida pausada');
  } else {
    // Iniciar
    intervalo = setInterval(() => {
      segundos++;
      document.getElementById('tempo').textContent = formatar(segundos);

      // Marco a cada 5 minutos
      if (segundos % 300 === 0) {
        registrar('Marco de ' + segundos / 60 + ' minutos');
      }
    }, 1000);
    botao.textContent = 'Pausar';
    registrar('Partida iniciada');
  }
}

function reiniciar() {
  if (!confirm('Zerar o tempo e os placares?')) return;

  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  placar = { A: 0, B: 0 };

  document.getElementById('tempo').textContent = '00:00';
  document.getElementById('btnIniciar').textContent = 'Iniciar';

  for (const t of ['A', 'B']) {
    document.getElementById('placar' + t).textContent = 0;
    document.getElementById('card' + t).classList.remove('destaque');
  }

  document.getElementById('lista').innerHTML = '';
}