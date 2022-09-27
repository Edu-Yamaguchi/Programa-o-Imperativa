//1.------------------------------------
function loopDePares(num) {
    for (var i = 0; i <= 100; i++) {
        let soma = (i + num);
        if (soma % 2 === 0) {
            console.log('o numero é par');
        } else {
            console.log(i);
        }
    }
};

//2..------------------------------------
function loopDeImpares(num, str) {
    for (var i = 0; i <= 100; i++) {
        let soma = (i + num);
        if (soma % 2 !== 0) {
            console.log(str);
        } else {
            console.log(i)
        }
    }
};

//3..------------------------------------
function soma(num) {
    let numArray = [];
    for (var i = 0; i <= num; i++) {
        numArray.push(i);
    }
    return numArray.reduce(function (a, i) {
        return a + i;
    })
};

//4..------------------------------------
function newArray(num) {
    let newArray = [];
    for (var i = 1; i <= num; i++) {
        newArray.push(i);
    }
    return newArray;
};

//5..------------------------------------
function split(str) {
    let newArray = [];
    for (i = 0; i < str.length; i++) {
        newArray.push(str[i]);
    }
    return newArray;
};

//6..------------------------------------
var array6 = [false, 2, 5, 9, 0, 5, 3, 'a'];
function moverZeros(array) {
    let arrayPrincipal1 = [];
    let arraySeparador = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            arrayPrincipal1.push(array[i])
        } else {
            arraySeparador.push(array[i])
        }
    };
    return arrayPrincipal1.concat(arraySeparador)
}

//7..------------------------------------
let array7a = [1, 2, 3];
let array7b = ['o', 'l', 'á'];
function arrayHandler(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        console.log("eu sou " + array1[i] + " e eu sou " + array2[i]);
    }
}

//8..------------------------------------
function arrayObjetos(num) {
    let newArray = [];
    for (var i = 1; i <= num; i++) {
        newArray.push({ valor: i })
    }
    return newArray;
}

//9..------------------------------------
function arrayObjetosTwo(num, str) {
    let newArray = [];
    for (var i = 1; i <= num; i++) {
        newArray.push({ [str]: i })
    }

    return newArray;
}
