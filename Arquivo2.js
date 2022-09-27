// Definindo e invocando uma função -----------------------------------------------------

function cumprimentar(nome) {
    console.log("Olá, seja bem vindo " + nome);
   }
   cumprimentar("Eduardo");
   
// Um case estranho -----------------------------------------------------

function cumprimentarA(nome) {
    let mensagem = "Olá, seja bem vindo! ";
    console.log(mensagem + nome);
   }
   
   cumprimentarA("William" + " e Danilo");;
   
// Funções que retornam valor -----------------------------------------------------

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
   }
   multiplicarPorDoisESomarCinco(1);
   multiplicarPorDoisESomarCinco(5);
   const Erick= 5
   multiplicarPorDoisESomarCinco(Erick)

   const valor = multiplicarPorDoisESomarCinco(Erick)
   console.log(valor);

// Polegada para Centimetro -----------------------------------------------------

let polegada = 2.54;
function conversor(){
    return console.log(polegada * 2.54);
}
conversor()

// Url -----------------------------------------------------

function url(dominio){
    return "https://www."+dominio+".com"
}
console.log( url("google") );

// Exclamação -----------------------------------------------------

let bemVindo = "Olá seja bem vindo";
function colocarExclamacao(){
    return console.log(bemVindo + "!")
}
colocarExclamacao()

// Cachorro idade com humano -----------------------------------------------------

function idadeCachorro(idadeHumano){
    return idadeHumano * 7; 
}
let idade = "Seu cachorro tem a idade total de " + idadeCachorro(5) + " anos";
let dog = idadeCachorro(5);
console.log(idade);

// Hora de Trabalho -----------------------------------------------------

let salario = 1000;

function calculoHora(){
    return console.log(salario / 160) // 160 Horas do mês trabalhadas -------------------------------
}
calculoHora();

// IMC -----------------------------------------------------

var nome = "Eduardo"
var peso = 70;
var altura = 1.65;
var calculoImc = (altura * altura) % peso;
console.log(calculoImc);

var imc = calculoImc;

console.log(nome + " seu índice de massa corporal é de " + imc)

// UpperCase -----------------------------------------------------

let text = "texto minúsculo para maiúsculo";
console.log(text.toUpperCase());

// Tipo de parâmetro -----------------------------------------------------

let dados = 12;
console.log(typeof dados);

// Calculando o raio do circulo -----------------------------------------------------

let raio = 5;
function calculoCircunferencia(){
    console.log(Math.PI * 2 * raio);
}
calculoCircunferencia()

let algo = !!""
console.log( typeof algo)
