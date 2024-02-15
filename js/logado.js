let depValor = document.getElementById("depValor");
let saqValor = document.getElementById("saqValor");

let saldoAtual;
let mudarNome = document.getElementById("mudarNome");
let inSaldoAtual = document.getElementById("inSaldoAtual");

depositarBtn = document.getElementById("depositarBtn");
sacarBtn = document.getElementById("sacarBtn");

let saldos = [];
let auxUsuario;
depositarBtn.addEventListener("click", (e) => {
    let valorDepositado = Number(depValor.value);
    if (valorDepositado == null || valorDepositado == 0  || isNaN(valorDepositado)) {
        alert("Valor inválido");
        return;
    } else {
   
        saldoAtual = Number(saldoAtual + valorDepositado)   ;
        inSaldoAtual.innerText = saldoAtual;
        alert(`Valor depositado!Saldo atual ${saldoAtual}`);
        depValor.value = "";

        saldos[auxUsuario] = saldoAtual;
        localStorage.setItem("saldos", saldos.join(";"));
    }

});

sacarBtn.addEventListener("click", (e) => {
    let valorSacado = saqValor.value;
    valorSacado = Number(valorSacado);
    saldoAtual = Number(saldoAtual - valorSacado);

    if (valorSacado == null || valorSacado == 0 || saldoAtual < 0) {
        alert("Valor inválido");
        return;
    } else {
        inSaldoAtual.innerText = saldoAtual;
        alert(`Valor Sacado !Saldo atual ${saldoAtual}`);
        saqValor.value = "";
        saldos[auxUsuario] = saldoAtual;
        localStorage.setItem("saldos", saldos.join(";"));
    }

});

window.addEventListener("load", () => {
    console.log(window.location.hash);
    let url = window.location.hash;
    let nomeUsuario = url.slice(1, url.indexOf("{"));

    auxUsuario = url.slice(url.indexOf("[") + 1, url.indexOf("]"))
    mudarNome.innerText = `Bem vindo ${nomeUsuario}`;
    auxUsuario = url.slice(url.indexOf("[") + 1, url.indexOf("]"));


    saldos = localStorage.getItem("saldos")
        ? localStorage.getItem("saldos").split(";")
        : [];

    inSaldoAtual.innerText = saldos[auxUsuario];
    saldoAtual = saldos[auxUsuario];
   
});