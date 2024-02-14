let inLogin = document.getElementById("inLogin");
let inSenha = document.getElementById("inSenha");
let logarBtn = document.getElementById("logarBtn");

let emails = [];
let senhas = [];
let usuarios = [];

let login;
let senha;

let aux;

logarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    login = inLogin.value;
    senha = inSenha.value;

    for (i = 0; i < emails.length; i++) {
        if (emails[i] == login) {
            console.log('Possui!')
            aux = i;
        }
    }
    if (senha == senhas[aux]) {
        alert('Logado com sucesso!');
        window.location = "logado.html#" + usuarios[aux] + "{" + saldos[aux] + "}" + "[" +  aux + "]";
    } else {
        alert('Dados incorretos!');
        inLogin.value = "";
        inSenha.value = "";
    }
});
window.addEventListener("load", () => {
    emails = localStorage.getItem("emails")
        ? localStorage.getItem("emails").split(";")
        : [];

    senhas = localStorage.getItem("senhas")
        ? localStorage.getItem("senhas").split(";")
        : [];
    usuarios = localStorage.getItem("usuarios")
        ? localStorage.getItem("usuarios").split(";")
        : [];
    saldos = localStorage.getItem("saldos")
        ? localStorage.getItem("saldos").split(";")
        : [];
});