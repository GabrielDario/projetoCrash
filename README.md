# projetoCrash
Projeto de um site de aposta de um jogo de crash,aonde o usuário tem que resgatar o dinheiro antes que o pássaro caia
          * Funcionará apenas em desktop por enquanto;
          * Ao entrar no site,sem logar, o usuário consegue jogar 3 vezes apenas para demonstração,depois disso
          apenas com pagamento;
          * Usuário tem que cadastrar
             - usuário
             - email
             - senha
            Para pagamento
             - pix
             - cpf
             - senha

             Jogo funcioná dessa maneira
              - O usuário fará sua aposta e ele vai inserir o valor que quer apostar.
              - Quando clicar em apostar,o pássaro será lançado do estilingue
              - o multiplicador irá começar do 0,0 e vai crescendo de 0,1;0,2;0,3...
              - Com isso,o multiplicador ira subindo e multiplicando o seu dinheiro até você resgatar
              ou crashar;

              - Para depositar e só botar o pix e o cpf
              - Para resgatar e só mandar o cpf (taxa de 10%)
              
              -Tabela dos 'ganhadores' é fictício

        --------------------------------------
        Mecânicas para dificultar o vôô
            - Random 0 e 1
            - 1 vai subindo 0,2x
            - 0 Crasha
        --------------------------------------
         Não vai para o ar, apenas para aprendizado
        --------------------------------------
        Caso for - Se ajeitar com pix - aprender métodos de pagamentos
        --------------------------------------
        Código exemplo sorteio : 
        let real = 0;
let maior = 0;
function myFunction() {

  let number = Math.floor(Math.random() * 2);
  if (number == 0) {
    real = real + 0.2;
  } else {
    real = 0;
  }

  if(real > maior) {
    maior = real;
  }
  console.log('Multiplicador é :' + real.toFixed(2) + 'x');
  console.log('maior número: ' + maior.toFixed(2)  )
}
var intervalId = setInterval(myFunction, 1000);
       
