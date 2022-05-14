// Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// - Registra el error en un archivo a través de un try...catch

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service'},
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const valorCuadrado = (valor) => {
    if (typeof valor === "number") {
        return valor*valor;
    }
    throw new Error("El valor debe ser de tipo numerico.");
}

const num = "a";

try {
    console.log("Ejecutando...");
    const doble = valorCuadrado(num);
    console.log(doble);
} catch(e) {
    // se ha producido un error
    logger.error(`ERROR: ${e}`);
} finally {
    // este codigo se ejecuta siempre, con o sin errores
}
