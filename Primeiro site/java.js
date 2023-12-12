//criando uma função em java script 
//A variavel n°1 está recebendo o valor digitado na caixa de entrada 
//parsefloat()- converter o que está dentro dos parenteses em número decimal
function calcular(operacao){
    var numero1=parseFloat(document.getElementById("numero1").value);
    var numero2=parseFloat(document.getElementById("numero2").value);
    var resultadoElemento=document.getElementById("resultado");
    //isNaN é uma função que verifica se a informação digitada é um texto(não é um número)
    if (isNaN(numero1) || isNaN(numero2)){
        resultadoElemento.textContent="Por favor , insira números válidos";
        return;
    }
    switch (operacao){
        case'soma':
            resultadoElemento.textContent='Resultado:'+(numero1+numero2);
            break;
        case'subtracao':
            resultadoElemento.textContent='Resultado:'+(numero1-numero2);
            break;
        case'multiplicacao':
            resultadoElemento.textContent='Resultado:'+(numero1*numero2);
            break;
        case'divisao':
            if (numero2 != 0){
            resultadoElemento.textContent='Resultado: ' + (numero1/numero2);
            }
            else{
                resultadoElemento.textContent="Não é possivél dividir por zero.";
            }
            break;
        default:
            resultadoElemento.textContent="Operação desconhecida";
            break;
    }
}
//Função para ligar a luz (troca para a imagem com a luz acesa)
function ligarLuz(){
    document.getElementById('luz').src = 'src/imagens/luzAcesa.png';
}
//Função para apagar a luz (voltar para a iamgem com a luz apagada)
function apagarLuz(){
    document.getElementById('luz').src ='src/imagens/luzApagada.png';
}



