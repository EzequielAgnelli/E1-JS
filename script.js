// EJERCICIO 1

function imprimirNumeroPar(numero) {
    if(numero % 2 === 0) {
        console.log("El numero " + numero + " es par")
    } else {
        console.log("El numero " + numero + " es impar")
    }
}

imprimirNumeroPar(4);





// EJERCICIO 2

// function numeroMayor(numero1, numero2) {
//     if(numero1 > numero2) {
//         console.log(numero1 + " Es mayor que " + numero2)
//     } else if(numero2 > numero1) {
//         console.log(numero2 + "Es mayor que " + numero1)
//     } else {
//         console.log("Los numeros son iguales")
//     }
// }

// numeroMayor(10, 10);






// EJERCICIO 3

// function multiploDeCinco(numero) {
//     if(numero % 5 === 0) {
//         console.log(numero + ' Es multiplo de 5')
//     } else {
//         console.log(numero + ' No es multiplo de 5')
//     }
// }

// multiploDeCinco(35);





// EJERCICIO 4

// function delCeroHastaElDiez(numero) {
//     for(numero = 0; numero <= 10; numero++) {
//         console.log(numero);
//     }
// }

// delCeroHastaElDiez();





// EJERCICIO 5

// function imprimirPalabra(palabra, numero) {
//     for(i = 0; i < numero; i++)
//     console.log(palabra);
// }

// imprimirPalabra("Lo hice bien?", 3)





// EJERCICIO 6

// function imprimirArray(array) {
//     for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     }
// }

// var array = [1, 2, 3, 4, 5]
// imprimirArray(array)





// EJERCICIO 7 

// function arrayCortado(array) {
//     array.splice(4, 1)
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrayCortado(array);





// EJERCICIO 8

// function multiplicarNumero(array, numero) {
//     for(var i = 0; i < array.length; i++) {
//         var resultado = array[i] * numero;
//         console.log(resultado);
//     }
// }

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// multiplicarNumero(array, 5)

