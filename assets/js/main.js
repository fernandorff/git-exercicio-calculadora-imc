const form = document.querySelector("#form1"); 

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado("Peso invalido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura invalida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivel(imc);

    console.log(imc, nivelImc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg,true);
});

function getNivel(imc) {
    const nivel = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade 1",
        "Obesidade 2",
        "Obesidade 3",
    ];
    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18) return nivel[1];
    if (imc < 18) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement("p");
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
