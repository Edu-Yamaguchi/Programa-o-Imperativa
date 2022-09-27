function mensagem(nome, idade){
    return "Olá eu sou o " + nome + " e tenho "+ idade + " anos de idade";
}
console.log(mensagem("Eduardo", 18));
let msg = mensagem("Fulano", 30);
console.log(msg);
msg = mensagem("Ciclano", 17);

console.log(mensagem + "Teste");

function soma(v1, v2){
    let result = v1 + v2;
    return result;
}
console.log(soma(5,5));

function url(dominio){
    return "https://www."+dominio+".com"
}
console.log( url("google") );

function idadeCachorro(idadeHumano){
    return idadeHumano * 7; 
}
let idade = "Seu cachorro tem a idade total de " + idadeCachorro(5) + "anos";
let dog = idadeCachorro(5);
console.log(idade.toUpperCase());
console.log( typeof idade);
console.log( typeof dog);

console.log(Math.random());

