const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a , b){
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for ( let i = 0; i < alicia.length; i++ ) {
        if (a[i] > b[i]) {
            pontosPrimeiroParticipante = pontosPrimeiroParticipante + 1;
//          console.log('Alicia Ganhou')

        }
        else if( a[i] < b[i]){
            pontosSegundoParticipante = pontosSegundoParticipante + 1;
//          console.log('Bob Ganhou')
        } 
        else{as
            console.log('Empatou');
        }
    }
    if (pontosPrimeiroParticipante > pontosSegundoParticipante){
        return ('Alicia Ganhou por ' + pontosPrimeiroParticipante + ' pontos');
    } else {
        return ('Bob Ganhou por ' + pontosSegundoParticipante + ' pontos');
    }
}

console.log(encontrarGanhador(alicia, bob));