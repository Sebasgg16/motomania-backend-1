const mongoose = require( "mongoose" );

function validateId( req, res, next ) {
    const id = req.params.id;

    // console.log("Hola soy ValidateId");
    
    if( ! mongoose.Types.ObjectId.isValid( id ) ) {

            return res.json( {
                ok: false,
                msg: "El id NO es valido"
            } );
    }

    next();
}

module.exports = validateId