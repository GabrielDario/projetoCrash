let apostar = document.getElementById("apostar");
let resgatar = document.getElementById("resgatar");
let cadastrar = document.getElementById("cadastrar");

let inValor = document.getElementById("inValor");
const inSaldo = document.getElementById("inSaldo");
let mult1 = document.getElementById("mult1");
let mult2 = document.getElementById("mult2");
let mult3 = document.getElementById("mult3");
let multiplicadores = [0,0,0];

let tentativas = 3;

let saldoInicial = 50;
let saldoFicticio = saldoInicial;
let valorApostado;
let pararValidacao = false;


apostar.addEventListener("click", (e) => {
  valorApostado = inValor.value;
  console.log("Valor apostado: " + valorApostado);

  validacoes(valorApostado);
  if(pararValidacao == true) {
    return;
  }
  tentativas--;
  alert(`Você tem mais ${tentativas} tentativas`);
  inValor.value = "";
  statusDinheiro.innerText = "SUBINDO...";
  saldoFicticio = saldoFicticio - valorApostado
  inSaldo.innerText = saldoFicticio.toFixed(2);
  apostado(valorApostado);
  resgatar.disabled = false;
  apostar.disabled = true;
  
});

const validacoes = (valorApostado) => {

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
    resgatar.disabled = true;
    apostar.disabled = true;
    pararValidacao = true;
    return;
  }
  if (isNaN(valorApostado)) {
    alert("Digite um número");
    pararValidacao = true;
    return;
  }
  if(saldoFicticio <= 0) {
    alert('SEM SALDO!');
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
  mudarMultiplicadores();
  draw();
  travarPassaro = false;
  resgatar.disabled = true;
  apostar.disabled = false;
}


const mudarMultiplicadores = () => {
  multiplicadores.unshift(multiplicador);
  mult1.innerText = multiplicadores[0].toFixed(2) + ' x';
  mult2.innerText = multiplicadores[1].toFixed(2) + 'x';
  mult3.innerText = multiplicadores[2].toFixed(2) + 'x';
}

