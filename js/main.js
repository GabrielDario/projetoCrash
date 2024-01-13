let apostar = document.getElementById("apostar");
let resgatar = document.getElementById("resgatar");
let cadastrar = document.getElementById("cadastrar");

let inValor = document.getElementById("inValor");
const inSaldo = document.getElementById("inSaldo");



let tentativas = 3;

let saldoInicial = 50;
let saldoFicticio = saldoInicial;
let valorApostado;
let pararValidacao = false;

resgatar.disabled = true;


apostar.addEventListener("click", (e) => {
  valorApostado = inValor.value;
  console.log("Valor apostado: " + valorApostado);

  validacoes(valorApostado);
  if(pararValidacao == true) {
    return;
  }
  tentativas--;
  alert(`Você mais ${tentativas} tentativas`);
  inValor.value = "";
  statusDinheiro.innerText = "SUBINDO...";
  saldoFicticio = saldoFicticio - valorApostado
  inSaldo.innerText = saldoFicticio;
  apostado();
  resgatar.disabled = false;
  apostar.disabled = true;
});

const validacoes = (valorApostado) => {
  console.log('validar');
  console.log(valorApostado);
  if (valorApostado == "") {
    alert("Preenha o campo com valor!");
    pararValidacao = true;
    return;
  }

  if (valorApostado > saldoFicticio) {
    alert("Valor a mais!");
    pararValidacao = true;
    return;
  }
  if (tentativas <= 0) {
    alert("Acabou as tentativas");
    pararValidacao = true;
    return;
  }
  pararValidacao = false;
};

resgatar.addEventListener("click", (e) => {
  resgatou();
});

function resgatou() {
  console.log('resgatou');
  clearInterval(animationInterval);
  clearInterval(multiplicadorInterval);
  let valorGanho = valorApostado * multiplicador;
  alert(`Você Resgatou "${multiplicador.toFixed(2)}" x ${valorApostado}
        \nVocê ganhou: ${valorGanho.toFixed(2)}`);
  saldoFicticio = saldoFicticio + valorGanho;
  inSaldo.innerText = saldoFicticio.toFixed(2);
  statusDinheiro.innerText = "Parado";
  valorGanhado.innerHTML = '0';
  draw();
  resgatar.disabled = true;
  apostar.disabled = false;
}