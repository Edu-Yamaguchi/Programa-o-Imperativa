let pessoas = require("../ModuloAplicação/modulo")
console.log(pessoas)

let lista = {
    maiorMenorAltura : (array) =>{
        let maior = array[0].altura;
        let menor = array[0].altura;

        //percorre o array 
        for(i = 0; i < array.length; i++){
            arrayVar = array[i];
            
        // verificar qual é o maior
        if (arrayVar.altura < menor){
            menor = arrayVar.altura;

        } else if(arrayVar.altura > maior){
        // verificar qual é o menor
        maior = arrayVar.altura;
        }
    }
    return "A maior altura é: " + maior + " e a menor altura é: " + menor;
    },

        mediaAlturaMulheres: function (array){
            let mulheres = array.filter(function(sexo){return sexo.sexo === 'F'});
            let media = 0;
            for(let i = 0; i < mulheres.length; i++){
                media += mulheres[i].altura
            }
            return media/mulheres.length
        },

        // //filter para separar os masculinos
            qtdHomens: function(array){
            let homens = array.filter(function(sexo){return sexo.sexo === 'M'});
            return homens.length
    }
}

console.log(lista.maiorMenorAltura (pessoas));
console.log(lista.mediaAlturaMulheres(pessoas));
console.log(lista.qtdHomens(pessoas));