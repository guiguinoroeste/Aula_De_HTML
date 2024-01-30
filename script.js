function limparDisplay() {
    document.getElementById('display').value = '';
}

function apagarUltimo() { 
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function adicionarCaractere(caractere) {  
    document.getElementById('display').value += caractere;
}

function calcularResultado() {
    var display = document.getElementById('display');
	display.value = eval(display.value);
}