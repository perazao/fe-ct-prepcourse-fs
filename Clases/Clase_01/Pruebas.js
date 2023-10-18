   // Si todos los elementos del arreglo son iguales, retornar true. Caso contrario retornar false.
   function allEqual(array) {
    return array.every(v => v === array[0]);
   
   }