console.log('Abrindo...');

let cadastrarBtn = document.getElementById("cadastrarBtn");

let inUsuario = document.getElementById("inUsuario");
let inEmail = document.getElementById("inEmail");
let inSenha = document.getElementById("inSenha");
let inConfirmar = document.getElementById("inConfirmar");

let usuario;
let validarUsuario = [];
let validarEmail = [];
let validarEmail2 = [];
let email;
let senha;
let confirmarSenha;

let emails = [];
let senhas = [];
cadastrarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('clicou');

    usuario = inUsuario.value;
    email = inEmail.value;
    senha = inSenha.value;
    confirmarSenha = inConfirmar.value;

    //Vazios
    if (usuario == "") {
        alert("Preenha o campo Usuário!");
        return;
    }
    if (email == "") {
        alert("Preenha o campo Email!");
        return;
    }
    if (senha == "") {
        alert("Preenha o campo Senha!");
        return;
    }
    if (confirmarSenha == "") {
        alert("Preenha o campo Confirmar Senha!");
        return;
    }


    //Validaçoes match
    validarUsuario = [];
    validarEmail = [];
    validarEmail2 = []
    validarUsuario = usuario.match(/\W|_/g);
    validarEmail = email.match(/[@]/g);
    validarEmail2 = email.match(/[.]/g);
    //Validações digitos
    if (validarUsuario != null) {
        alert("Não pode haver caracter especial no usuário!");
        return;
    }
    if (validarEmail == null || validarEmail2 == null) {
        alert("Email inválido");
        return;
    }
    if (senha != confirmarSenha) {
        alert("As senhas não conferem");
        return;
    }

    alert('Dados Cadastrados!');
 
    emails.push(email);
    localStorage.setItem("emails", emails.join(";"));

    senhas.push(senha);
    localStorage.setItem("senhas", senhas.join(";"));
    
    inUsuario.value = "";
    inEmail.value = "";
    inSenha.value = "";
    inConfirmar.value = "";
    
 
});

window.addEventListener("load", () => {
    emails = localStorage.getItem("emails")
    ? localStorage.getItem("emails").split(";")
    : [];

    senhas = localStorage.getItem("senhas")
    ? localStorage.getItem("senhas").split(";")
    : [];
});