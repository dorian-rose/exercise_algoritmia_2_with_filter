// Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
// 	1º Almacenar todos los números en un array
// 2º Almacenar en otro array los números comprendidos entre el 1 y 250
// 3º Almacenar en otro array los números comprendidos entre el 251 y 500

function imprimir(numeros, array1a250, array251a50) {
  let arrayAll = document.querySelector(".array1");
  arrayAll.innerHTML = arrayAll.innerHTML + numeros;
  let arrayLower = document.querySelector(".array2");
  arrayLower.innerHTML = arrayLower.innerHTML + array1a250;
  let arrayHigher = document.querySelector(".array3");
  arrayHigher.innerHTML = arrayHigher.innerHTML + array251a50;
}

function sort(numeros) {
  let array1a250 = numeros.filter(filterLowerNumbers);
  function filterLowerNumbers(value) {
    return value < 251;
  }

  let array251a50 = numeros.filter(filterUpperNumbers);
  function filterUpperNumbers(value) {
    return value > 250 && value < 500;
  }
  imprimir(numeros, array1a250, array251a50);
}

function validar(valor) {
  while (isNaN(valor) && numero > 0 && numero < 501) {
    numero = parseFloat(
      prompt(`Numero no valido, entra de nuevo el numero ${i + 1}`)
    );
  }
  return valor;
}

function getNumbers() {
  let numerosArray = [];
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(
      prompt(`Entra un numero entre 1 y 500 (numero ${i + 1})`)
    );
    numerosArray.push(validar(numero));
  }
  sort(numerosArray);
}
