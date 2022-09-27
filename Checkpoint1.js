    // PRATO
function microondas (prato, temperatura){
    let tempoColocado;

    if (prato == "Pipoca"){
        tempoColocado = 10;
    } 
    else if (prato = "Macarrão"){
        tempoColocado = 8;
    } 
    else if (prato = "Carne"){
        tempoColocado = 15;
        return;
    } 
    else if (prato = "Feijão"){
        tempoColocado = 12;
    } 
    else if (prato = "Brigadeiro"){
        tempoColocado = 8;
    } 
    else {
        console.log("Seu prato não existe no menu");
    }
    // TEMPO INSUFICIENTE
    if(temperatura < tempoColocado){
        return("Aqueça novamente seu prato o_o");
    }
    // PRONTO
    else if (temperatura <= tempoColocado * 2 && temperatura >= tempoColocado){
        return("Sua comida está pronta °u°");
    }
    // QUEIMOU
    else if (temperatura >= tempoColocado * 2 && temperatura < tempoColocado * 3){
        return("Sua comida queimou ;-;");
    }
    // MICROONDAS EXPLODIU
    else if (temperatura >= tempoColocado * 3){
        return("Dê bye bye para seu microondas");
    }
}
console.log (microondas ("Feijão", 30));