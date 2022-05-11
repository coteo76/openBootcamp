// factorial - bucle while + break

var factorial = 1;
var factorial_de = 10;

var i = 1;

while (true) {

    factorial *= i;
    
  	if( i == factorial_de ) { 
          break; 
        }

    i++;
}

console.log(factorial);