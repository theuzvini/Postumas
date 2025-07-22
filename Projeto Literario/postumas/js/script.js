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