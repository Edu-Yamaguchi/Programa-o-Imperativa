let altura = 1.70;
let acompanhado = true;

function podeSubir(altura, acompanhado){
    if (altura >= 1.4 && altura <= 2){
        console.log("Pode subir");
    } else if ((altura <= 1.40 && altura >= 1.2) && acompanhado){
        console.log("Pode subir");
    } else {
        console.log("Não pode subir")
    }
}
podeSubir(altura, acompanhado);


