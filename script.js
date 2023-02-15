// se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
// 	1º Cuantos son positivos
//  2º Cuantos son negativos
//  3º Cuantos son pares
let numeros = [];

let numeroDePares = 0;
let numerosNegativos = 0;
let numerosPositivos = 0;

function imprimir(numerosNegativos, numerosPositivos, numeroDePares) {
  document.querySelector(".result").innerHTML =
    document.querySelector(".result").innerHTML +
    ` Hay ${numerosNegativos} numeros negativos y ${numerosPositivos} numeros positivos`;

  document.querySelector(".result-pares").innerHTML =
    document.querySelector(".result-pares").innerHTML +
    ` Hay  ${numeroDePares} numeros pares`;
}
function operar(numbers) {
  //get negative array length (number of negatives)
  let negativeArray = numbers.filter(isNegative);
  function isNegative(value) {
    return value < 0;
  }

  //get positive array length (number of positives)
  let positiveArray = numbers.filter(isPositive);
  function isPositive(value) {
    return value > 0;
  }
  //get even number array (number of evens)
  let evenArray = numbers.filter(isPar);
  function isPar(value) {
    return value % 2 == 0;
  }
  //call function imprimir, passing arguments
  imprimir(negativeArray.length, positiveArray.length, evenArray.length);
}

function validar(valor) {
  while (isNaN(valor)) {
    numero = parseFloat(prompt(`Numero no valido, entra de nuevo el numero `));
  }
  return valor;
}

function getNumbers() {
  let numeros = [];
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Entra el numero ${i + 1}`));
    numeros.push(validar(numero));
  }
  operar(numeros);
}
