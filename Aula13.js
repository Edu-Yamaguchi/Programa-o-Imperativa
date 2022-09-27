let placa = 'qqqq444';
let cor = 'branco';

function buzina(){
    return 'Birrrrrr';
}

let carro = {
    placa:'qqqq444',
    cor: 'cor',
    qtd_rodas: 4,
    seguro: true,
    buzina: function(){
        return 'Birrrrrr do carro' + this.cor;
    }
};

function Carro(placa, cor, qtd_rodas, seguro){
    this.placa = placa;
    this.cor = cor;
    this.qtd_rodas = qtd_rodas;
    this.seguro = seguro;
    this.buzina = function(){
        return 'Birrrrrr do carro' + this.cor;
    }
}

let novoCarro = new Carro("QWER-123", "Prata", "3", false);

console.log(placa);
console.log(carro);
console.log(novoCarro);

let jsonCarro = {
    "placa": "POI-7489",
    "cor": "Vermelho"
}
let dados = JSON.stringify(jsonCarro);
console.log(typeof dados);

dados = JSON.parse(dados);