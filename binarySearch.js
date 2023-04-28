function binarySearch(array, target)
{
    let min = 0;
    let max = array.length - 1;

    while (min <= max) { 
        // Calculamos la mitad del arreglo (el promedio de min + max / 2)
        let guess = Math.floor((max + min) / 2);
        
        // Comparamos si target es === al array[promed]
        if (array[guess] == target) {
            return guess;
        // Si el numero encontrado es menor a target, igualamos a min el promedio + 1, lo cual nos hace descartar 
        // la primera mitad de los numeros menores a guess o promedio
        }else if (array[guess] < target) {
            min = guess + 1;
        // Si max es mayor entonces descartamos la segunda mitad a partir de promedio, volviendo a max el promedio - 1 y min 
        // mantendria su valor
        }else {
            max = guess - 1;
        }
    }

    // Retorna -1 porque el bucle while modifico las variables min y max , donde max ahora es menos que min.
    return -1;
}

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let sought = binarySearch(primes, 10);

console.log(sought);
