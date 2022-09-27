const listPessoas = require('./Aula14');

console.log(listPessoas)

function mediaIdade(lista){
    for(let aux = 0; aux < lista.length; aux++){
        const element = Array[aux];
        result += lista[aux].idade;
    } 
    return result/lista.length;
}
console.log(mediaIdade(listPessoas));