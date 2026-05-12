
function calcular(event){
    event.preventDefault();

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let mensagem = document.getElementById("mensagem");

    let imc = peso / (altura * altura);
    
    if(imc < 18.5){
        mensagem.innerText = `Seu IMC é ${imc.toFixed(2)} e está Abaixo de 18.5`;
    } else if(imc >= 18.5 && imc < 25){
        mensagem.innerText = `Seu IMC é ${imc.toFixed(2)} e está Normal`;
    } else if(imc >= 25 && imc < 30){
        mensagem.innerText = `Seu imc é ${imc.toFixed(2)} e está Sobrepeso`;
    } else {
        mensagem.innerText = `Seu imc é ${imc.toFixed(2)} e está Obesidade`;
    }
}