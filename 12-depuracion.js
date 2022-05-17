// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci 
//    (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

const fibo = num => {
    let fib_num = 1;
    let fib_arr = [ fib_num ];
    for( let i=1; i<num; i++ ) {
        fib_arr = [ ...fib_arr, fib_num ];
        fib_num = fib_arr[i] + fib_arr[i-1];
    }
    return fib_arr;
}

console.log( fibo(6) );

