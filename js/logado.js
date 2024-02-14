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
    let valorDepositado = depValor.value;
    if (valorDepositado == null || valorDepositado == 0) {
        alert("Valor inválido");
        return;
    } else {
        valorDepositado = Number(valorDepositado);
        saldoAtual = Number(saldoAtual + valorDepositado);
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
        localStorage.setItem("saldo", saldos.join(";"));
    }

});

window.addEventListener("load", () => {
    console.log(window.location.hash);
    let url = window.location.hash;
    let cortarUrl = url.slice(1, url.indexOf("{"));

    let saldo = url.slice(url.indexOf("{") + 1, url.indexOf("}"))
    mudarNome.innerText = `Bem vindo ${cortarUrl}`;
    inSaldoAtual.innerText = saldo;
    saldoAtual = saldo;

    saldos = localStorage.getItem("saldos")
        ? localStorage.getItem("saldos").split(";")
        : [];

    auxUsuario = url.slice(url.indexOf("[") + 1, url.indexOf("]"));
});