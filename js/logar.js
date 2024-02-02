let inLogin = document.getElementById("inLogin");
let inSenha = document.getElementById("inSenha");
let logarBtn = document.getElementById("logarBtn");

let emails = [];
let senhas = [];

let login;
let senha;

let aux;

logarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    login = inLogin.value;
    senha = inSenha.value;
     
    for(i = 0; i < emails.length; i++){
        console.log(emails[i]);
        if(emails[i] == login) {
            console.log('Possui!')
            aux = i;
        }
    }
    if(senha == senhas[aux]){
        alert('Logado com sucesso!');
        window.location.href = "index.html";
    }else{
        alert('Dados incorretos!');
        
    }
});
window.addEventListener("load", () => {
    emails = localStorage.getItem("emails")
    ? localStorage.getItem("emails").split(";")
    : [];

    senhas = localStorage.getItem("senhas")
    ? localStorage.getItem("senhas").split(";")
    : [];
});