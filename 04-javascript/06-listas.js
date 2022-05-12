var listaCompra = [ "Arroz", "Yogures", "Leche", "Azucar" ];
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
listaCompra.pop();
console.log(listaCompra);

var listaPeliculas = [  { titulo: "Seven", director: "David Fincher", fecha: 1995 },
                        { titulo: "Akira", director: "Katsuhiro Otomo", fecha: 1988 },
                        { titulo: "Joker", director: "Todd Philips", fecha: 2019 } ]

var peliculasRecientes = listaPeliculas.filter( obj => obj.fecha >= 2010 );
var directores = listaPeliculas.map( obj => obj.director );
var titulos = listaPeliculas.map( obj => obj.titulo );
var listaConcat = directores.concat(titulos);
var listaPropag = [...directores, ...titulos];

console.log(listaPeliculas);
console.log(peliculasRecientes);
console.log(directores);
console.log(titulos);
console.log(listaConcat);
console.log(listaPropag);
