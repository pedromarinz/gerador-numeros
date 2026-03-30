function gerar() {
  let min = parseInt(document.getElementById('min').value);
  let max = parseInt(document.getElementById('max').value);

  let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById('resultado').innerText = sorteio;
}