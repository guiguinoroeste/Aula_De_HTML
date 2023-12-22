var Peso;
var Altura;
IMC = peso / altura * altura
peso = document.getElemenentById("txtPeso").value;
addEventListener("click", function(){
});
altura = document.getElementById("txtAltura").value;
addEventListener("click", function(){
});
document.getElementById("classificacaoIMC").value;
addEventListener("click", function(){
});
function verificarIMC(IMC) {
if (imc < 17) {
    classificacaoIMC('Muito abaixo do peso', 'alert');
  } else if (imc > 17 && imc <= 18.49) {
    classificacaoIMC('Abaixo do peso', 'warning');
  } else if (imc >= 18.5 && imc <= 24.99) {
    classificacaoIMC('Peso normal', 'sucess');
  } else if (imc >= 25 && imc <= 29.99) {
    classificacaoIMC('Acima do peso', 'warning');
  } else if (imc >= 30 && imc <= 34.99) {
    classificacaoIMC('Obesidade I', 'alert');
  } else {
    classificacaoIMC('Obesidade II', 'danger');
  }
}

function classificacaoIMC(msg, type) {
  
}

