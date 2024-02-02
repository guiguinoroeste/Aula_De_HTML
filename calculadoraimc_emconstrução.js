function calculo () {
    var altura = document.getElementById("Altura");
    var peso = document.getElementById("Peso");
    var nome = document.getElementById("Nome");
    var resultado = document.getElementById("result");

    var altura = parseFloat(altura.value);
    var peso = parseFloat(peso.value);

    imc = peso/(altura*altura);

    if(isNaN(imc)){
        alert("Valor Nulo")

    }else if (imc <= 18.5){
        resultado.innerHTML =`Seu IMC é de ${imc.toFixed(2)} voce está abaixo do peso`

    }else if(imc >= 18.5 && imc <25 ){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está no peso ideal`

    }else if (imc >= 25 && imc <29.9){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está levemente acima do peso`

    }else if(imc >= 30 && imc < 34.9){

        resultado.innerHTML =`Seu IMC é de ${imc.toFixed(2)} voce está obeso`   
    }
} 