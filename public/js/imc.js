function calculaIMC(peso, altura) {

    if (validateEntry(peso, altura)) {
        const imc = getIMC(peso, altura);
        const result = getInfoOfIMC(imc)

        return `O seu IMC é ${imc.toFixed(2)} : ${result}`

    } else {
        return "Entrada de valor inválido"
    }
}

function validateEntry(peso, altura) {

    const verifyIfIszero = altura != 0 || peso != 0;
    const verifyIfIsLessThanZero = (altura > 0 && peso > 0);
    const verifyIfValueIsValid = verifyElement(peso) && verifyElement(altura);

    if (verifyIfIszero && verifyIfIsLessThanZero && verifyIfValueIsValid) {
        return true;
    } else {
        return false;
    }

}


function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc;
}

function verifyElement(element) {
    if (!element) {
        return false;
    } else {
        return true;
    }
}


function getInfoOfIMC(imc) {
    if (imc > 40) {
        return "Obesidade grau 3";
    } else if (imc >= 35) {
        return "Obesidade grau 2"
    } else if (imc >= 30) {
        return "Obesidade grau 1"
    } else if (imc >= 25) {
        return "Sobrepeso";
    } else if (imc >= 18.5) {
        return "Peso Normal"
    } else if (imc < 18.5) {
        return "Abaixo do peso"
    }
}

module.exports = { calculaIMC }