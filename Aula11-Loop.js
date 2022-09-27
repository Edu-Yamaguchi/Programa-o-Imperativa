// for (inicio, condição, modificador){

//}

for (let volta = 1; volta <= 5; volta++){
    console.log('Volta número: ' + volta)
};

/*
let aux = 1;
while(aux <= 5 ){
    console.log('olá for auxiliar == ' + aux );
    aux++;
};

aux = 1;
do{
    console.log('olá for auxiliar == ' + aux );
    aux++;
} while (aux >= 5);

*/


let filmes= ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela",  "a vida é bela"];
console.log(filmes.length);
// filmes[0] = " filme "+filmes[0];
// filmes[1] = " filme "+filmes[1];
// filmes[2] = " filme "+filmes[2];
// filmes[3] = " filme "+filmes[3];
// filmes[4] = " filme "+filmes[4];


for(let auxiliar = 0; auxiliar< filmes.length; auxiliar++){
    filmes[auxiliar] = " filme "+filmes[auxiliar].toUpperCase();
}

console.log(filmes);

let aux = 1;
while(aux<=5){
    //console.log('olá for auxiliar == '+aux);
    aux++
}

aux = 1;
do{
    // console.log('olá for auxiliar == '+aux);
    aux++
}while(aux>=5);