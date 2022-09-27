let espectador = [
    {
        idade : 18,
        opiniao : 1
    },
    {
        idade : 19,
        opiniao : 3
    },
    {
        idade : 20,
        opiniao : 2
    },
    {
        idade : 21,
        opiniao : 1
    },
    {
        idade : 22,
        opiniao : 1
    },
    {
        idade : 23,
        opiniao : 3
    },
    {
        idade : 24,
        opiniao : 2
    },
    {
        idade : 25,
        opiniao : 3
    },
    {
        idade : 26,
        opiniao : 3
    },
    {
        idade : 27,
        opiniao : 2
    },
    {
        idade : 28,
        opiniao : 1
    },
    {
        idade : 29,
        opiniao : 1
    },
    {
        idade : 30,
        opiniao : 1
    },
    {
        idade : 31,
        opiniao : 2
    },
    {
        idade : 32,
        opiniao : 2
    }
];

// 3 media idade
const mediaOpiniao = (array) => {
    let opiniaoOtima = 0;
    let qtdEspectador = 0;
    let auxMedia = 0;

    for(i = 0; i < array.length; i++){
        let arrayEspec = array[i];
    //filter para separar os espectadores
        if(arrayEspec.opiniao === 3){
            qtdEspectador ++;
            auxMedia = arrayEspec.idade + auxMedia;
        }
        opiniaoOtima = auxMedia/qtdEspectador;
    }
    console.log(`A média de espectadores que responderam ótimo foi de ${opiniaoOtima}`);
}
mediaOpiniao(espectador);


//2.

const qtdRegular = espectador.filter(function(opiniao){return opiniao.opiniao === 1})
    console.log(qtdRegular.length);

//3. 

let porcBom = espectador.filter(function(opiniao){return opiniao.opiniao === 2})
    let porcentagem = porcBom.length * 100/espectador.length;
    console.log(porcentagem);

