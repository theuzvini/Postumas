setTimeout(() => {
  const audio = document.getElementById('abertura');
  audio.volume = 0.3;
  audio.play().catch((e) => {
    console.log("Usuário precisa interagir antes para tocar o áudio:", e);
  }); }, 2000);

setTimeout(() => {
  document.getElementById('logo').style.display = 'none';
  document.getElementById('jogo').style.display = 'block';
}, 10000);

document.addEventListener("click", () => {
  const audio = document.getElementById("fundo");
  audio.muted = false;
  audio.volume = 0.1;
  audio.play().catch(e => console.warn("Falha ao iniciar o áudio:", e));
}, { once: true });


function tocarSom1() {
  const som = document.getElementById("clique");
  som.currentTime = 0;
  som.play();
  setTimeout(() => {
    window.location.href = '../html/sobre.html';
  }, 600);
}

function tocarSom2() {
  const som = document.getElementById("clique");
  som.currentTime = 0;
  som.play();
  setTimeout(() => {
    window.location.href = '../html/tutorial.html';
  }, 600);
}

function tocarSom3() {
  const som = document.getElementById("clique");
  som.currentTime = 0;
  som.play();
  setTimeout(() => {
    window.location.href = '../html/autoria.html';
  }, 600);
}

function tocarSom4() {
  const som = document.getElementById("clique");
  som.currentTime = 0;
  som.play();
  setTimeout(() => {
    window.location.href = '../html/dedicatoria.html';
  }, 600);
}

function tocarSom5() {
  const som = document.getElementById("clique");
  som.currentTime = 0;
  som.play();
  setTimeout(() => {
    window.location.href = '../html/livro.html';
  }, 600);
}