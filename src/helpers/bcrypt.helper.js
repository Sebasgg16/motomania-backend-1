const bcrypt = require( "bcrypt" );

function encryptedPassword ( pass ) {
    const salt = bcrypt.genSaltSync();
    console.log( "salt: ", salt );

    const hashPassword = bcrypt.hashSync(
        pass,
        salt
    );

    return hashPassword;
}

const verifyEncriptedPassword = ( pass, hashPass ) => {
    return bcrypt.compareSync( 
        pass,       
        hashPass    
    );
}


module.exports = {
    encryptedPassword,
    verifyEncriptedPassword
}