// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
var setFamilia = new Set(["Carlos", "Pepe", "Antonia", "Luis"]);
console.log(setFamilia);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add( "Carlos" );
console.log(setFamilia);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("JavaScript");
console.log(setFamilia);

