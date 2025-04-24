const mongoose = require( 'mongoose' );
const dotenv = require ('dotenv')
dotenv.config()

/** Configuracion para conectar MongoDB usando la dependencia MongooseJS usando Async/Await */
async function dbConection() {
    // try-catch: Se usa para manejar excepciones
    try {
        await mongoose.connect( process.env.BD_URI, {} );      // Conectamos a la base de datos y retorna promesa
        console.log( 'Base de datos inicializada correctamente' );
    } 
    catch ( error ) {
        console.error( error );
        console.log( 'Ha ocurrido un error en la conexion de la BD' );
        // throw new Error( 'Error al inicializar la base datos' );
    } 

}

module.exports = dbConection;       // Exportando la configuracion
