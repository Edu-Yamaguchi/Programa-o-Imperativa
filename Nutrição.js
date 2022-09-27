var nome = "Eduardo Cotrim Yamaguchi";
var idade = 18;
var peso = 70;
var altura = 1.65;

var plano = true;
if(plano === false){
    var plano = "não possuí plano"
}
else{
    var plano = "possuí um plano"
}

var calculoImc = (altura * altura) % peso;
console.log(calculoImc);

var imc = calculoImc;

console.log(nome + " Tem " + idade + " anos e seu índice de massa corporal é de " + imc)