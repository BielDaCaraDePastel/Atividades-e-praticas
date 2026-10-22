let resultado = document.getElementById("resultado");

for (let participante = 1; participante <= 100; participante++) {

    if (participante <= 5) {
        resultado.innerHTML += 
            "Participante " + participante + 
            ": Seja bem-vindo ao treinamento!<br>";
    } 
    else if (participante <= 20) {
        resultado.innerHTML += 
            "Participante " + participante + 
            ": Você está na primeira etapa.<br>";
    } 
    else if (participante <= 50) {
        resultado.innerHTML += 
            "Participante " + participante + 
            ": Você está na segunda etapa.<br>";
    } 
    else if (participante <= 80) {
        resultado.innerHTML += 
            "Participante " + participante + 
            ": Você está na terceira etapa.<br>";
    } 
    else {
        resultado.innerHTML += 
            "Participante " + participante + 
            ": Treinamento chegando ao final!<br>";
    }
}
